import React from "react";
import "../styles/strip1.css";

export default function Strip1() {
  const message = (
    <>
      <span className="mx-8">FREE SHIPPING ON ORDERS ABOVE RS 899/-</span>
      <span className="mx-8">EXTRA 10% OFF ON PURCHASE OF 3 OR MORE PRODUCTS.</span>
    </>
  );

  return (
    <div className="bg-black text-amber-300 h-[8vh] font-bold fixed w-full z-50 overflow-hidden flex items-center">
      <div className="strip-track">
        <div className="scroll-content">{message}{message}{message}{message}</div>
      </div>
    </div>
  );
}
