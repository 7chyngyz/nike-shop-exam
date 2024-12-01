import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const PUT = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  try {
    const data = await request.json();

    if (!data.name || !data.price || !data.image) {
      return NextResponse.json(
        { message: "Name, price, and image are required" },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.nike.update({
      where: { id: Number(id) },
      data: {
        name: data.name,
        price: data.price,
        image: data.image,
      },
    });

    return NextResponse.json(
      { message: "User updated successfully", updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
