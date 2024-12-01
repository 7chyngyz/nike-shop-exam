"use client";
import React, { useState } from "react";
import scss from "./PostTodo.module.scss";
import {
  useDeleteTodoMutation,
  useEditTodoMutation,
  useGetTodoQuery,
} from "@/redux/api/v1/todo";

interface TodoItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

const PostTodo = () => {
  const { data, isLoading, isError } = useGetTodoQuery();
  const [putData] = useEditTodoMutation();
  const [deleteData] = useDeleteTodoMutation();

  const [editMode, setEditMode] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<Partial<TodoItem> | null>(null);

  const deleteItem = async (id: TodoItem) => {
    try {
      await deleteData(id);
      console.log("Item deleted");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleEdit = (item: TodoItem) => {
    setEditMode(true);
    setEditItem(item);
  };

  const saveEdit = async () => {
    if (!editItem || !editItem.id) return;
    try {
      const { id, ...data } = editItem;
      const response = await putData({ id, ...data });
      console.log("Item updated:", response);
      setEditMode(false);
      setEditItem(null);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editItem) return;
    setEditItem({
      ...editItem,
      [e.target.name]: e.target.value,
    });
  };

  if (isLoading) {
    return (
      <div className={scss.loader}>
        <p>Loading...</p>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className={scss.error}>
        <p>Error loading data</p>
      </div>
    );
  }

  return (
    <section className={scss.PostTodo}>
      <div className="container">
        <div className={scss.content}>
          <h1>NIKE PRO</h1>
          <div className={scss.bigBlock}>
            {data
              .slice()
              .reverse()
              .map((item: TodoItem) => (
                <div className={scss.card} key={item.id}>
                  {editMode && editItem?.id === item.id ? (
                    <div className={scss.edit}>
                      <input
                        type="text"
                        name="image"
                        value={editItem.image || ""}
                        onChange={handleChange}
                        placeholder="Image URL"
                      />
                      <input
                        type="text"
                        name="name"
                        value={editItem.name || ""}
                        onChange={handleChange}
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        name="price"
                        value={editItem.price || ""}
                        onChange={handleChange}
                        placeholder="Price"
                      />
                      <button onClick={saveEdit}>Save</button>
                    </div>
                  ) : (
                    <div className={scss.block}>
                      <img src={item.image} alt={item.name} />
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      <div className={scss.buttons}>
                        <button
                          className={scss.btn1}
                          onClick={() => deleteItem(item)}
                        >
                          Delete
                        </button>
                        <button
                          className={scss.btn2}
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostTodo;
