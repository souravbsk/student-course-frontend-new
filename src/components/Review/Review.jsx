"use client";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import user from "@/assets/home/Testimonial/user1.png";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Review = ({ review }) => {
  //   const { id, userTitle, reviewCount, description, img } = review;
  return (
    <div className="border space-y-2 hover:shadow rounded-md  p-8">
      <div className="flex flex-col items-center gap-3">
        <Rating
        style={{ maxWidth: 100 }}
        value={5}
        readOnly
        ></Rating>
        <p className="text-center mb-3 font-light">
          This course is very informative and has helped me learn a lot about
          the topic.
        </p>

        <div className="flex gap-3">
          <figure>
            <Image
              width={100}
              height={100}
              className="w-16 h-16 object-cover rounded-full object-top"
              src={user}
              alt=""
            />
          </figure>
          <div>
            <h4 className="text-lg text-primary font-semibold">Jane Smith</h4>
            <p className="text-sm">Student</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
