import React, { useState } from 'react';
import Image1 from '../assets/poert1.png';
import Image2 from '../assets/port2.png';
import Image3 from '../assets/port3.png';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="text-center py-16 w-full bg-white text-black relative">
      <h1 className="text-4xl font-bold">PORTFOLIO COMPONENT</h1>
      <div className="flex text-3xl items-center justify-center mt-4">
        <div className="w-20 h-1 bg-black mr-2"></div>
        <i className="fa-solid fa-star text-black"></i>
        <div className="w-20 h-1 bg-black ml-2"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8  px-16 mt-10">
        {[Image1, Image2, Image3, Image1, Image2, Image3].map((image, index) => (
          <div
            key={index}
            className="relative  rounded-xl flex items-center justify-center cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <div className="absolute w-auto inset-0 flex  items-center justify-center bgBasic  opacity-0 group-hover:opacity-70 transition-opacity">
              <div className=" text-black flex items-center justify-center rounded-full  font-bold">
              <i className="fa-solid fa-plus text-8xl text-white "></i>
              </div>
            </div>
            <img src={image} alt="Portfolio" className="w-full" />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Selected" className="w-3/4 md:w-1/2 lg:w-1/3 rounded-xl" />
        </div>
      )}
    </div>
  );
}