import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { phone } = await request.json();
  console.log(`phone number asked for otp: ${phone}`);
  try {
    const response = await fetch(process.env.BACKEND_URL + `/api/sendOtp`, {
      method: "POST",
      body: JSON.stringify({
        phone: "+919811525897"
      }),
      headers: { "Content-Type": "application/json" }
    });

    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" });
  }
  // return NextResponse.json({ phone });
};