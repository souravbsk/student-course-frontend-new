"use client";
import MyCourseDiv from '@/PageSpecificComponents/MyCourses/MyCourseDiv'
import OptionBoxButton from '@/PageSpecificComponents/TutorialPage/OptionBoxButton';
import React from 'react'
// fake course data
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

const navItems = [
  { id: 1, name: "All Courses" },
  { id: 2, name: "wishlist" },
];


const MyCourses = () => {
  const [hiddenMenu, setHiddenMenu] = React.useState(navItems[0].id);
  return (
    <main>
      <section className="mt-32">
        <div className="container">
          <h1 className="text-transparent pl-2 text-left text-xl md:text-2xl  font-bold bg-clip-text bg-gradient-to-r from-[#502048] to-[#471950]">
            My Learning
          </h1>

          <div className="course-nav w-full overflow-x-auto flex justify-start gap-2 mt-5">
            {navItems.map((buttonData, index) => (
              <OptionBoxButton key={index} data={{ hiddenMenu, setHiddenMenu, buttonData }} />))
            }
          </div>

          <div className="grid lg:grid-cols-3 course-md:gap-2  course-md:grid-cols-3 course-sm:grid-cols-2 gap-8 mt-12 course-sm:gap-5 course-lg:gap-8 border-1">
            {CourseList?.slice(0, 6).map((course) => (
              <MyCourseDiv key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default MyCourses
