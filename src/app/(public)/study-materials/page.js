import NoteTable from "@/components/NoteTable/NoteTable";
import React from "react";

const StudyMaterials = () => {
  const allNotes = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Web Development Basics",
      category: "web",
      publishDate: "2023-08-05",
      price:23,
      fileLink: "https://example.com/files/image1.jpg",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "App Development Fundamentals",
      category: "app",
      publishDate: "2023-08-04",
      price:23,
      fileLink: "https://example.com/files/image2.jpg",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Software Development Principles",
      category: "software",
      publishDate: "2023-08-03",
      price:23,
      fileLink: "https://example.com/files/image3.jpg",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Creating Responsive Websites",
      category: "web",
      publishDate: "2023-08-02",
      price:23,
      fileLink: "https://example.com/files/image4.jpg",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Mobile App Design Principles",
      category: "app",
      publishDate: "2023-08-01",
      price:23,
      fileLink: "https://example.com/files/image5.jpg",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Software Development Lifecycle",
      category: "software",
      publishDate: "2023-07-31",
      price:23,
      fileLink: "https://example.com/files/image6.jpg",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Web Design Principles",
      category: "web",
      publishDate: "2023-07-30",
      price:23,
      fileLink: "https://example.com/files/image7.jpg",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "App Development Strategies",
      category: "app",
      publishDate: "2023-07-29",
      price:23,
      fileLink: "https://example.com/files/image8.jpg",
    },
    // ... rest of the data
  ];

  return (
    <section className="pt-32">

      <div className="container">
        <div className="overflow-x-auto">
          <table className="table overflow-hidden rounded-lg">
            <thead className="bg-primary">
              <tr className="md:text-lg font-bold text-white border-b-2 border-gray-700">
                <th className="text-center md:text-start hidden sm:block">Image</th>
                <th >Title</th>
                <th >Category</th>
                <th > Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {allNotes.map((note) => (
                <NoteTable key={note?.id} note={note}></NoteTable>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div className="join  flex items-center justify-center mt-6">
            <button className="join-item w-fit bg-[#FB7818]   text-white  text-sm px-6 py-2 rounded-md">
              Prev
            </button>{" "}
            <div className="divider lg:divider-horizontal"></div>
            <button className="join-item w-fit bg-[#FB7818]   text-white  text-sm px-6 py-2 rounded-md">
              Next
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default StudyMaterials;
