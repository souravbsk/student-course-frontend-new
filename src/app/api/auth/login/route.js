import { NextResponse } from 'next/server'

export const POST = async (request) => {
  const { ...all } = await request.json();
  console.log(all);

  const requestData = {
    method: 'POST',
    body: JSON.stringify({ ...all }),
    headers: { "Content-Type": "application/json" }
  };

  try {
    const loginRequest = await fetch(process.env.BACKEND_URL + '/api/login', requestData);

    const data = await loginRequest.json();

    console.log(loginRequest.status);

    if (loginRequest.status === 201) {
      return NextResponse.json(data);
    } else {
      console.log('user could not registered');
      return NextResponse.json(data);
    }
  } catch (error) {
    console.error('An error occurred:', error);
    return NextResponse.json({ msg: "Something went wrong" });
  }

}
