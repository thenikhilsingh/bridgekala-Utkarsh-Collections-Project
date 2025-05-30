import React from "react";
import "../styles/strip1.css";

export default function Strip1() {
  return (
    <div className="bg-black text-amber-300 flex justify-center items-center h-[8vh] font-bold fixed w-[100vw] z-10">
      <div className="strip-track flex">
        <span className="mx-4">FREE SHIPPING ON ORDERS ABOVE RS 899/-</span>
        <span className="mx-4">
          EXTRA 10% OFF ON PURCHASE OF 3 OR MORE PRODUCTS.
        </span>
      </div>
    </div>
  );
}
