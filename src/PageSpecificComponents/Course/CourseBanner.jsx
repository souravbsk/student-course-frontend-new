import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay,Navigation } from "swiper/modules";
import Review from "@/components/Review/Review";
import MyCourseDiv from "../MyCourses/MyCourseDiv";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const CourseList = [
  {
    id: 1,
    courseCategory: "Development",
    studentEnroll: 50,
    project: 6,
    month: 16,
    hoursofvideo: 140,
    courseTitle: "Full Web Designing Course With 30 Web Template",
    courseWeek: 12,
    courseLesson: 3,
    courseLabel: "Beginner",
    authorTitle: "David Garza",
    authorImg:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    review: 4.5,
    courseImg:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\nnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\ntenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\nquia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \nsapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\nrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis \nminima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \nquibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur \nfugiat, temporibus enim commodi iusto libero magni deleniti quod quam \nconsequuntur! Commodi minima excepturi repudiandae velit hic maxime\ndoloremque. Quaerat provident commodi consectetur veniam similique ad \nearum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo \nfugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore \nsuscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium\nmodi minima sunt esse temporibus sint culpa, recusandae aliquam numquam \ntotam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam \nquasi aliquam eligendi, placeat qui corporis!`,
    socialLinks: [
      {
        name: "Facebook",
        url: "https://facebook.com",
      },
      {
        name: "Twitter",
        url: "https://twitter.com",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
      },
    ],
    price: 29.99,
    plan: {
      month: 8,
      hours: 80,
      project: 6,
      assignment: 60,
      bonusFeature: ["Placement Preparation with Industry Experts"],
      modules: [
        "Introduction to Programming",
        "Data Structures and Algorithms",
        "Frontend & React",
        "Backend",
      ],
    },
  },
  {
    id: 2,
    courseCategory: "IT & Software",
    studentEnroll: 14,
    project: 6,
    month: 16,
    hoursofvideo: 140,
    courseTitle: "Education Software And PHP And JS System Script",
    courseWeek: 3,
    courseLesson: 4,
    courseLabel: "Intermediate",
    authorTitle: "John Doe",
    authorImg:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    review: 4.8,
    courseImg:
      "https://images.unsplash.com/photo-1573162915955-6a8ba9d2fe20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\nnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\ntenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\nquia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \nsapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\nrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis \nminima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \nquibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur \nfugiat, temporibus enim commodi iusto libero magni deleniti quod quam \nconsequuntur! Commodi minima excepturi repudiandae velit hic maxime\ndoloremque. Quaerat provident commodi consectetur veniam similique ad \nearum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo \nfugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore \nsuscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium\nmodi minima sunt esse temporibus sint culpa, recusandae aliquam numquam \ntotam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam \nquasi aliquam eligendi, placeat qui corporis!`,
    socialLinks: [
      {
        name: "Facebook",
        url: "https://facebook.com",
      },
      {
        name: "Instagram",
        url: "https://instagram.com",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
      },
    ],
    price: 49.99,
    plan: {
      month: 8,
      hours: 80,
      project: 6,
      assignment: 60,
      bonusFeature: ["Placement Preparation with Industry Experts"],
      modules: [
        "Introduction to Programming",
        "Data Structures and Algorithms",
        "Frontend & React",
        "Backend",
      ],
    },
  },
  {
    id: 3,
    courseCategory: "Finance & Accounting",
    studentEnroll: 100,
    project: 6,
    month: 16,
    hoursofvideo: 140,
    courseTitle: "The Complete Business Plan Course Includes 10+ Templates",
    courseWeek: 8,
    courseLesson: 8,
    courseLabel: "Advanced",
    authorTitle: "Adam Riky",
    authorImg:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    review: 4.2,
    courseImg:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\nnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\ntenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\nquia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \nsapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\nrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis \nminima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \nquibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur \nfugiat, temporibus enim commodi iusto libero magni deleniti quod quam \nconsequuntur! Commodi minima excepturi repudiandae velit hic maxime\ndoloremque. Quaerat provident commodi consectetur veniam similique ad \nearum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo \nfugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore \nsuscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium\nmodi minima sunt esse temporibus sint culpa, recusandae aliquam numquam \ntotam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam \nquasi aliquam eligendi, placeat qui corporis!`,
    socialLinks: [
      {
        name: "Twitter",
        url: "https://twitter.com",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
      },
      {
        name: "YouTube",
        url: "https://youtube.com",
      },
    ],
    price: 39.99,
    plan: {
      month: 8,
      hours: 80,
      project: 6,
      assignment: 60,
      bonusFeature: ["Placement Preparation with Industry Experts"],
      modules: [
        "Introduction to Programming",
        "Data Structures and Algorithms",
        "Frontend & React",
        "Backend",
      ],
    },
  },
  {
    id: 4,
    courseCategory: "Health & Fitness",
    studentEnroll: 16,
    project: 6,
    month: 16,
    hoursofvideo: 140,
    courseTitle: "Fitness, Physical Education Relation To Academic Performance",
    courseWeek: 7,
    courseLesson: 48,
    courseLabel: "Beginner",
    authorTitle: "Mike Hussy",
    authorImg:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    review: 4.9,
    courseImg:
      "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\nnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\ntenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\nquia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \nsapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\nrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis \nminima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \nquibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur \nfugiat, temporibus enim commodi iusto libero magni deleniti quod quam \nconsequuntur! Commodi minima excepturi repudiandae velit hic maxime\ndoloremque. Quaerat provident commodi consectetur veniam similique ad \nearum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo \nfugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore \nsuscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium\nmodi minima sunt esse temporibus sint culpa, recusandae aliquam numquam \ntotam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam \nquasi aliquam eligendi, placeat qui corporis!`,
    socialLinks: [
      {
        name: "Facebook",
        url: "https://facebook.com",
      },
      {
        name: "Instagram",
        url: "https://instagram.com",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
      },
    ],
    price: 59.99,
    plan: {
      month: 8,
      hours: 80,
      project: 6,
      assignment: 60,
      bonusFeature: ["Placement Preparation with Industry Experts"],
      modules: [
        "Introduction to Programming",
        "Data Structures and Algorithms",
        "Frontend & React",
        "Backend",
      ],
    },
  },
  {
    id: 5,
    courseCategory: "Development",
    studentEnroll: 50,
    project: 6,
    month: 16,
    hoursofvideo: 140,
    courseTitle: "Full Web Designing Course With 30 Web Template",
    courseWeek: 18,
    courseLesson: 3,
    courseLabel: "Beginner",
    authorTitle: "David Garza",
    authorImg:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    review: 4.5,
    courseImg:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\nnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\ntenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\nquia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \nsapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\nrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis \nminima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \nquibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur \nfugiat, temporibus enim commodi iusto libero magni deleniti quod quam \nconsequuntur! Commodi minima excepturi repudiandae velit hic maxime\ndoloremque. Quaerat provident commodi consectetur veniam similique ad \nearum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo \nfugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore \nsuscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium\nmodi minima sunt esse temporibus sint culpa, recusandae aliquam numquam \ntotam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam \nquasi aliquam eligendi, placeat qui corporis!`,
    socialLinks: [
      {
        name: "Facebook",
        url: "https://facebook.com",
      },
      {
        name: "Twitter",
        url: "https://twitter.com",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
      },
    ],
    price: 29.99,
    plan: {
      month: 8,
      hours: 80,
      project: 6,
      assignment: 60,
      bonusFeature: ["Placement Preparation with Industry Experts"],
      modules: [
        "Introduction to Programming",
        "Data Structures and Algorithms",
        "Frontend & React",
        "Backend",
      ],
    },
  },
  {
    id: 6,
    courseCategory: "IT & Software",
    studentEnroll: 12,
    project: 6,
    month: 16,
    hoursofvideo: 140,
    courseTitle: "Education Software And PHP And JS System Script",
    courseWeek: 20,
    courseLesson: 4,
    courseLabel: "Intermediate",
    authorTitle: "John Doe",
    authorImg:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    review: 4.8,
    courseImg:
      "https://images.unsplash.com/photo-1573162915955-6a8ba9d2fe20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\nnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\ntenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\nquia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \nsapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\nrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis \nminima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \nquibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur \nfugiat, temporibus enim commodi iusto libero magni deleniti quod quam \nconsequuntur! Commodi minima excepturi repudiandae velit hic maxime\ndoloremque. Quaerat provident commodi consectetur veniam similique ad \nearum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo \nfugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore \nsuscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium\nmodi minima sunt esse temporibus sint culpa, recusandae aliquam numquam \ntotam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam \nquasi aliquam eligendi, placeat qui corporis!`,
    socialLinks: [
      {
        name: "Facebook",
        url: "https://facebook.com",
      },
      {
        name: "Instagram",
        url: "https://instagram.com",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
      },
    ],
    price: 49.99,
    plan: {
      month: 8,
      hours: 80,
      project: 6,
      assignment: 60,
      bonusFeature: ["Placement Preparation with Industry Experts"],
      modules: [
        "Introduction to Programming",
        "Data Structures and Algorithms",
        "Frontend & React",
        "Backend",
      ],
    },
  },
];

const CourseBanner = () => {
  return (
    <div className=" pt-10 ">
      <div className="  text-white">
        <h3 className="text-3xl font-bold mb-6">My Courses</h3>
      </div>
      <div className="">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={30}
          breakpoints={{
            540: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            668: {
              slidesPerView: 2.3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3.3,
              spaceBetween: 50,
            },
          }}
          pagination={{
            clickable: true,
          }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          navigation={{
            prevEl: ".js-prev",
            nextEl: ".js-next",
          }}
          modules={[Pagination, Autoplay,Navigation]}
          className="mySwiper"
        >
          {CourseList?.slice(0, 6).map((course) => (
            <SwiperSlide key={course.id}>
              <div className="p-2 group shadow-lg bg-white">
                <figure className="overflow-hidden rounded-md">
                  <Image
                    className="w-full duration-300 group-hover:scale-105 h-40 rounded-md"
                    src={course?.courseImg}
                    alt=""
                    width={100}
                    height={100}
                  />
                </figure>

                <div className="px-2 flex h-fit flex-col gap-2 py-3">
                  <div className="flex justify-between items-center">
                    <span className="bg-[#511C48] text-white text-xs font-medium mr-2 px-3.5 py-1 rounded-full">
                      {course?.courseCategory}
                    </span>
                  </div>
                  <h2 className="text-lg text-[#511C48] font-semibold whitespace-nowrap w-full md:w-50 overflow-hidden overflow-ellipsis">
                    {course?.courseTitle}
                  </h2>
                  {/* <div className="flex items-center gap-3">
                    <Rating
                      readOnly
                      style={{ maxWidth: 80 }}
                      value={course?.review}
                    ></Rating>{" "}
                    <p className="text-[#502048]">
                      <span className="text-base font-semibold">
                        {course?.review}
                      </span>{" "}
                      ({course?.studentEnroll} students)
                    </p>
                  </div> */}
                </div>
                <hr />
                <div className=" flex justify-end items-center">
                  {/* <h4 className="font-base text-md">completed: 0%</h4> */}
                  <Link
                    className=" bg-[#FB7818] text-white font-semibold px-4 py-2 rounded-md"
                    href={`/myCourses/${course.id}`}
                  >
                    Start Course
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" hidden md:flex items-center justify-end mt-8">
        <div className="nav__item -left js-prev">
          <button className="bg-orange-400 text-white px-3 py-3 rounded-full"><FaArrowLeft size={26}  /></button>
        </div>
        <div className="nav__item -right ml-10 js-next">
          <button className="bg-orange-400 text-white px-3 py-3 rounded-full"><FaArrowRight size={26}  /></button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CourseBanner;
