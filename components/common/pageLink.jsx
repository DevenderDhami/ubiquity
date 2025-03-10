import Link from "next/link";
import React from "react";

const PageLinks = ({ items, title, imageUrl }) => {
  return (
    <section
      className="relative h-[200px] flex items-center justify-center bg-cover bg-center "
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gray-600 opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center">
        <h3 className="text-4xl font-bold capitalize">{title}</h3>

        {/* Breadcrumbs */}
        <div className="flex justify-center items-center gap-2 mt-2 text-lg font-semibold">
          {items.map((item, index) => (
            <div key={index} className="capitalize">
              <Link href={item.link} className="hover:underline">
                {item.name}
              </Link>
              {index < items.length - 1 && <span className="mx-1">{`//`}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageLinks;
