import { NextResponse } from "next/server";

export async function GET() { 
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/");

  const todo = await data.json();

  return NextResponse.json(todo);
};