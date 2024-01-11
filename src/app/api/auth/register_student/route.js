import { NextRequest, NextResponse } from 'next/server'

export const POST = async (request) => {
  const { ...all } = await request.json();
  console.log(all);

  const requestData = {
    method: 'POST',
    body: JSON.stringify({ ...all }),
    headers: { "Content-Type": "application/json" }
  };

  try {
    const registerStudent = await fetch(process.env.BACKEND_URL + '/api/signup/student', requestData);

    const data = await registerStudent.json();
    console.log(registerStudent.status);

    if (registerStudent.status === 201) {
      return NextResponse.json({
        status: true,
        message: 'student regitered successfully'
      });
    } else {
      console.log('user cannot be registered');
      return NextResponse.json(data);
    }
  } catch (error) {
    console.error('An error occurred:', error);
    return NextResponse.json(data);
  }

}
