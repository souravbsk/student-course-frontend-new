import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { phone, otp } = await request.json();
  console.log(`Otp varification: phone=${phone} otp=${otp}`);

  try {
    const verifyOtpResponse = await fetch(process.env.BACKEND_URL + '/api/verifyotp', {
      method: "POST",
      body: JSON.stringify({ phone, otp }), // temproraly number is changed to mine as it gives something in response.
      headers: { "Content-Type": "application/json" }
    });

    console.log({ phone, otp });
    const data = await verifyOtpResponse.json();
    console.log("otp data: ", data);

    if (verifyOtpResponse.ok) {
      console.log("chal gya");
      return NextResponse.json(data);
    } else {
      console.log("nhi chala");
      return NextResponse.json(data);
    }
  } catch (error) {
    console.error('An error occurred while verifying phone number:', error);
    return NextResponse.json({ error: "An error occured." })
  }
  // return NextResponse.json({ phone });
};