import React from "react";

export const ImageGallery = () => {
  return (
    <>
      <div className="flex flex-col justify-center border border-black p-5 w-full">
        <div className="flex justify-center border border-black p-5 my-5">
          <input
            type="text"
            className="border border-black h-10 mx-5 w-80 rounded-xl"
          />
          <button className="border border-black mx-5 px-5 rounded-xl active:scale-90">
            Search
          </button>
        </div>
        <div className=" flex justify-evenly flex-wrap border border-black p-5 my-5">
          <div className="border border-black w-80 h-96 m-5 rounded-xl "></div>
          <div className="border border-black w-80 h-96 m-5 rounded-xl "></div>
          <div className="border border-black w-80 h-96 m-5 rounded-xl "></div>
          <div className="border border-black w-80 h-96 m-5 rounded-xl "></div>
        </div>
      </div>
    </>
  );
};
