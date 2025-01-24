"use client";
import Header from "@/Components/Header";
import { useState } from "react";
import axios from "axios";

const ImagesPage = () => {
  const [image, setImage] = useState([]);

  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      setImage(response.data);
    } catch (error) {
      console.error("Error fetching images");
    }
  };

  return (
    <>
      <div className="p-12">
        <button
          onClick={getImages}
          className="px-5 py-3 bg-green-600 text-white font-bold cursor-pointer rounded-md hover:bg-green-700 transition-all"
        >
          Get Images
        </button>

        {/* Grid Layout for Images */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {image.map((elem, i) => (
            <div
              key={i}
              className="border rounded-lg shadow-lg overflow-hidden"
            >
              <h1 className="text-center bg-green-300 text-white font-bold py-2">
                {elem.author}
              </h1>
              <img
                src={elem.download_url}
                alt={elem.author}
                className="w-full h-48 object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImagesPage;
