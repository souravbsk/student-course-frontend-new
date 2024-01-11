import React from "react";
import instructor from "@/assets/home/instructor/instructor.png";
import Image from "next/image";

const CreateAccountStep = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1">
          <Image src={instructor} alt="instructor" className="w-full object-fill"></Image>
          </div>
          <div className="flex-1 space-y-4">
            <ul className="space-y-8">
              <li className="flex gap-5">
                <span className="bg-primary shrink-0 text-xl text-white rounded-full inline-block text-center w-10 h-10 py-1 px-1">
                  1
                </span>
                <div>
                  <h4 className="text-xl mb-2 font-semibold text-primary ">
                    Create account
                  </h4>
                  <p className="">
                    Oluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa.
                  </p>
                </div>
              </li>
              <li className="flex  gap-5">
                <span className="bg-primary shrink-0 text-xl text-white rounded-full inline-block text-center w-10 h-10 py-1 px-1">
                  2
                </span>
                <div>
                  <h4 className="text-xl mb-2 font-semibold text-primary ">
                    Create account
                  </h4>
                  <p className="">
                    Oluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa.
                  </p>
                </div>
              </li>
              <li className="flex  gap-5">
                <span className="bg-primary shrink-0 text-xl text-white rounded-full inline-block text-center w-10 h-10 py-1 px-1">
                  3
                </span>
                <div>
                  <h4 className="text-xl mb-2 font-semibold text-primary ">
                    Create account
                  </h4>
                  <p className="">
                    Oluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa.
                  </p>
                </div>
              </li>
              <li className="flex  gap-5">
                <span className="bg-primary shrink-0 text-xl text-white rounded-full inline-block text-center w-10 h-10 py-1 px-1">
                  4
                </span>
                <div>
                  <h4 className="text-xl mb-2 font-semibold text-primary ">
                    Create account
                  </h4>
                  <p className="">
                    Oluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccountStep;
