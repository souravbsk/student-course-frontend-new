import { NextResponse } from "next/server";

export const POST = async (req) => {

  const { data } = await req.json();
  const { user, expires} = data;

  const requestData = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({...user, expires}),
  }
  const response = await fetch(process.env.BACKEND_URL + "/api/google", requestData);
  const responseData = await response.json();
  return NextResponse.json(responseData);

  // const fakeResponse = {
  //   jwt: "0oiasvoan.eoiwavlsdkk.0jaskldfja",
  //   success: true,
  //   user: {
  //     name: "John Doe",
  //     email: "johnDoe123@g.com",
  //     image: "https://via.placeholder.com/150",
  //   },
  // }
  // console.log("fake response: ", fakeResponse);
  // return NextResponse.json(fakeResponse);

} 