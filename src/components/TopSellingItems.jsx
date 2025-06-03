import React from "react";
import Card2 from "./Card2";

export default function TopSellingItems() {
  return (
    <div className="flex flex-col items-center px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Top Selling Item
      </h1>
        <hr className="w-full border-t-2 border-gray-300 mb-4" />
      <Card2 />
    </div>
  );
}
