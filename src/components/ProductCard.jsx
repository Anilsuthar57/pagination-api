import React from "react";

function ProductCard({ key, title, image, category }) {
  return (
    <>
      <div className="">
        <div key={key} className="bg-gray-300  rounded-2xl overflow-hidden ">
          <img src={image} alt={title} className="w-full bg-gray-100 " />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              <span className="font-medium text-gray-600">Category:</span>{" "}
              {category}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
