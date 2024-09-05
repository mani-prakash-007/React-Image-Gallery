import axios from "axios";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Keys
const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

export const ImageGallery = () => {
  const [image, setImage] = useState();
  const [totalPages, setTotalPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [currentInputValue, setCurrentInputValue] = useState();
  const inputRef = useRef();

  //Function for fetching Images

  const handleClick = async (pageNumber) => {
    const inputData = inputRef.current.value;
    const url = `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${inputData}&client_id=${API_KEY}`;
    const response = await axios.get(url);
    setImage(response.data);
    setTotalPages(response.data.total_pages);
    setCurrentInputValue(inputData);
  };

  //Function for Show more
  const handleShowMore = async (page) => {
    const url = `https://api.unsplash.com/search/photos?page=${
      page + 1
    }&query=${currentInputValue}&client_id=${API_KEY}`;
    const response = await axios.get(url);
    const newData = response.data.results;
    setImage((previousData) => ({
      ...previousData,
      results: [...previousData.results, ...newData],
    }));
    setPageNumber(pageNumber + 1);
  };
  return (
    <>
      <div className="flex flex-col justify-center w-full">
        <div className="flex justify-center p-5">
          <input
            ref={inputRef}
            type="text"
            className="border border-black h-10 px-5 mx-5 w-80 rounded-xl focus:outline-none "
            placeholder="Search for Images"
          />
          <button
            onClick={() => handleClick(pageNumber)}
            className="border border-black mx-5 px-5 rounded-xl active:scale-90"
          >
            Search
          </button>
        </div>
        <div className=" flex justify-evenly flex-wrap p-5 ">
          {!image ? (
            <h1 className="text-center font-medium text-2xl">
              Search for Images...😊
            </h1>
          ) : image.total_pages === 0 ? (
            <h1 className="text-center font-medium text-2xl">
              {`No Images found...😔`}
            </h1>
          ) : (
            image.results &&
            image.results.map((data, index) => {
              return (
                <div
                  key={index}
                  className="border border-black w-96 min-h-96 m-5 rounded-xl shadow-[1px_4px_25px_10px_#a0aec0]"
                >
                  <a href={data.links.html} target="_blank">
                    <img
                      src={data.urls.small}
                      alt="avengers"
                      className=" rounded-t-lg h-56 w-full hover:opacity-80"
                    />
                  </a>
                  <p className="px-5 py-5 font-thin text-2xl">
                    {data.alt_description}
                  </p>
                </div>
              );
            })
          )}
        </div>
        {image &&
          (image.total_pages != 0 || image.total_pages < totalPages) && (
            <div className="flex justify-center my-10">
              <button
                onClick={() => handleShowMore(pageNumber)}
                className="border px-5 py-2 w-40 rounded-2xl font-bold text-xl text-sky-500 active:scale-95 hover:text-white hover:bg-sky-500"
              >
                Show More
              </button>
            </div>
          )}
      </div>
    </>
  );
};
