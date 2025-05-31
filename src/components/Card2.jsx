import React, { useState } from "react";
import topSellItem from "./topSellingItemsData";
import Icon from "@mdi/react";
import { mdiHeartOutline, mdiHeart } from "@mdi/js";
import { useCart } from "./CartContext"; 

export default function Card2() {
  const [likedItems, setLikedItems] = useState([]);
  const { addToCart } = useCart(); 

  const toggleHeart = (index) => {
    setLikedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="flex gap-8 flex-wrap justify-center">
      {topSellItem.map((item, index) => {
        const original = Number(item.originalPrice);
        const discounted = Number(item.discountedPrice);
        const discount =
          original && discounted
            ? Math.round(((original - discounted) / original) * 100)
            : 0;

        const isLiked = likedItems.includes(index);

        return (
          <div
            key={index}
            className="w-56 bg-white rounded-lg shadow-md overflow-hidden font-sans"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <Icon
                path={isLiked ? mdiHeart : mdiHeartOutline}
                size={1.3}
                className={`cursor-pointer absolute top-2 right-2 bg-white rounded-full p-1 ${
                  isLiked ? "text-red-500" : "text-gray-500 hover:text-red-400"
                }`}
                onClick={() => toggleHeart(index)}
              />
            </div>
            <div className="p-4">
              <h2 className="text-sm font-semibold text-gray-800 text-center h-12">
                {item.title}
              </h2>
              <p className="text-center text-yellow-600 mt-1">{item.rating}</p>
              <div className="flex justify-between items-center mt-3">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 line-through">
                      ₹{original}
                    </span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                      {discount}% off
                    </span>
                  </div>
                  <p className="text-lg font-bold text-gray-800 mt-1">
                    ₹{discounted}
                  </p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-3 py-1 rounded cursor-pointer"
                    onClick={() => {
                      addToCart(item); 
                    }}
                  >
                    + Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
