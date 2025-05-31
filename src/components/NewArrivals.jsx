import React from "react";
import Card from "./Card";

export default function NewArrivals() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-center mb-8">New Arrivals</h1>
      <div className="mb-10">
        <Card />
      </div>
    </div>
  );
}
