import React from "react";
import { toast } from "react-toastify";
const courseData = [
  { id: 101, name: "Introduction to Physics" },
  { id: 102, name: "History of Art" },
  { id: 103, name: "Programming 101" },
  { id: 104, name: "Literature Appreciation" },
  { id: 105, name: "Math Fundamentals" },
];

const AddMaterialModal = ({ setIsOpen, isOpen }) => {
  const handleAddMaterial = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const courseSelect = form.courseSelect.value;
    const materialFile = form.materialFile.files[0];

    if (isNaN(price)) {
      toast.error("price must be a number", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    console.log(title, price, courseSelect, materialFile);
  };

  return (
    <div>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/80 z-30 "
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 left-0 w-full z-50 h-full flex items-center justify-center">
            <div className="bg-[#F1F5F9] md:w-6/12 p-4 rounded shadow-md">
              <div className="text-right">
                <button
                  className="bg-primary  text-white font-semibold py-2 px-4 rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </button>
              </div>

              <div className="">
                <form
                  onSubmit={handleAddMaterial}
                  className=" md:px-6 py-6 rounded-2xl"
                >
                  <div className="flex mb-4 md:mb-8 gap-4 md:gap-8 flex-col items-center md:flex-row">
                    <div className="form-control w-full">
                      <label className="">
                        <span className="text-primary font-semibold">
                          Title
                        </span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        required
                        placeholder="Title"
                        className="input bg-white input-bordered w-full"
                      />
                    </div>
                    <div className="form-control w-full">
                      <label className="">
                        <span className="text-primary font-semibold">
                          Price
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="price"
                        name="price"
                        required
                        className="input bg-white input-bordered w-full"
                      />
                    </div>
                  </div>

                  <div className="flex gap-8 flex-col items-center md:flex-row">
                    <div className="w-full">
                      <label className="">
                        <span className="text-primary font-semibold">
                          Courses
                        </span>
                      </label>
                      <select
                        name="courseSelect"
                        className="select bg-white select-bordered w-full"
                      >
                        {courseData.map((course) => (
                          <option value={course?.id} key={course?.id}>
                            {course?.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-full">
                      <label className="">
                        <span className="text-primary font-semibold">
                          Courses
                        </span>
                      </label>
                      <div>
                        <input
                          type="file"
                          name="materialFile"
                          className="file-input file-input-bordered w-full max-w-xs"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Material</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddMaterialModal;
