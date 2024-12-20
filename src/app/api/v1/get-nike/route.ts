import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const data = await prisma.nike.findMany();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
};
