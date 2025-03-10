import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import ImageModal from "./ImageModal";

const ImagesList = ({ list }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? list.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isModalOpen) return;

      switch (event.key) {
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "Escape":
          closeModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer group rounded-lg overflow-hidden"
            onClick={() => openModal(index)}
          >
            <img
              src={item.imgSrc}
              alt={`ImagesList ${index + 1}`}
              className="w-full max-h-[300px] object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-green-100 bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaEye className="text-white text-4xl" />
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <ImageModal
          imgSrc={list[currentIndex].imgSrc}
          closeModal={closeModal}
          nextImage={nextImage}
          prevImage={prevImage}
        />
      )}
    </div>
  );
};

export default ImagesList;
