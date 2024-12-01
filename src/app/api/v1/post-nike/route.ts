import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const body = await request.json();
  const { name, price, image } = body;
  try {
    const newData = {
      name: name,
      price: price,
      image: image,
    };
    const data = await prisma.nike.create({
      data: newData,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
};
