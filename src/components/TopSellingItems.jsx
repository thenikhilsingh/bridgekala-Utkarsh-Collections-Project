import React from "react";
import Card2 from "./Card2";

export default function TopSellingItems() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Top Selling Item
      </h1>
      <div className="mb-10">
        <Card2 />
      </div>
    </div>
  );
}
