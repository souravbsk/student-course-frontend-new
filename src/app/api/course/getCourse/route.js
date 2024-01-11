  import { NextResponse } from 'next/server'
  export const GET = async (request) => {
    // console.log(request);
    try {
      const res = await fetch('https://student-course-frontend-new.vercel.app/api/course/getCourse');
      const data = await res.json();
      // console.log(data);
        return NextResponse.json(data);

    } catch (error) {
      // console.error('An error occurred:', error);
      return NextResponse.json({
        status: false,
        message: 'An error occured in registration.'
      });
    }
  
  }
  