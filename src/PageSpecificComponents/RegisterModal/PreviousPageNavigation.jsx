import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { setOpen } from "@/Store/RegisterModalSlice/RegisterModalSlice";
import { useDispatch } from "react-redux";


const PreviousPageNavigation = ({ pageNumber, setPage, setDirection }) => {

  const dispatch = useDispatch();

  const handlePreviousPage = () => {
    if (pageNumber === 0) return;
    setDirection(-1);
    setPage((old) => old - 1);
  };
  return (
    <div className="model-navigation w-full mb-4 md:mb-8">
      <div className="flex items-center justify-between gap-2">
        <button
          className={`rounded-full p-2 shadow-sm hover:bg-parimary hover:text-whtie hover:scale-80 transition-all duration-150 ${pageNumber === 0 ? "bg-gray-300 text-gray-100" : "bg-primary text-white hover:scale-95"}`}
          onClick={handlePreviousPage}
        >
          <BiArrowBack />
        </button>
        <button
          className={`rounded-full p-2 shadow-sm hover:bg-parimary hover:text-whtie hover:scale-80 transition-all duration-150 text-white bg-primary hover:bg-red-600 hover:scale-95`}
          onClick={() => { dispatch(setOpen(false)) }}
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
}

export default PreviousPageNavigation;