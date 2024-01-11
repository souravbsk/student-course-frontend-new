import Image from 'next/image';
import React from 'react';
import userImg from "@/assets/About/user/user1.jpg";

const InstructorDiv = () => {
    return (
        <div className="px-5 py-8 rounded-lg border">
            <div className="flex gap-3">
              <div className="avatar shrink-0">
                <div className="w-16 rounded-full">
                  <Image
                    width={25}
                    height={25}
                    src={userImg}
                    alt="instructor"
                  ></Image>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#471850]">
                  Ankush Singla
                </h4>
                <p>Co-Founder & Instructor</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
              nobis nemo nesciunt incidunt ratione laboriosam itaque saepe hic
              recusandae architecto et amet iure fugiat! Magnam?
            </p>
          </div>
    );
};

export default InstructorDiv;