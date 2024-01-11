"use client";
import React from "react";
import Review from "@/components/Review/Review";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
const Reviews = () => {
  return (
    <section className="mt-16 sm:mt-32">
      <div className="container">
        <h1 className=" text-transparent text-center text-xl md:text-3xl  font-bold bg-clip-text bg-gradient-to-r from-[#502048] to-[#471950]">
          Student Reviews
        </h1>
        {/* <div
          className="grid md:grid-cols-3 mt-8 gap-8
      "
        > */}

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper mt-8"
        >
          <SwiperSlide>
            <Review></Review>
          </SwiperSlide>
          <SwiperSlide>
            <Review></Review>
          </SwiperSlide>
          <SwiperSlide>
            <Review></Review>
          </SwiperSlide>
          <SwiperSlide>
            <Review></Review>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Reviews;
