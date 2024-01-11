import { NextResponse } from "next/server";

export async function GET(request) { 

  const  id = request.params;

  console.log(id);


  return NextResponse.json({id});
};