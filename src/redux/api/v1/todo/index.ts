import { api as index } from "../..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    postTodo: builder.mutation<TODO.PostTodoResponse, TODO.PostTodoRequest>({
      query: (data) => ({
        url: `/post-nike`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    getTodo: builder.query<TODO.GetTodoResponse, TODO.GetTodoRequest>({
      query: () => ({
        url: `/get-nike`,
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    deleteTodo: builder.mutation<
      TODO.DeleteTodoResponse,
      TODO.DeleteTodoRequest
    >({
      query: (valueItem) => ({
        url: `/delete-nike/${valueItem.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
    editTodo: builder.mutation({
      query: (valueItem) => {
        return {
          url: `/edit-nike/${valueItem.id}`,
          method: "PUT",
          body: valueItem,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  usePostTodoMutation,
  useGetTodoQuery,
  useDeleteTodoMutation,
  useEditTodoMutation,
} = api;
