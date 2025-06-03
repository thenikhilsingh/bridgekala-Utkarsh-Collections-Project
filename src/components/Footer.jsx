import React from "react";
import Icon from "@mdi/react";
import {
  mdiChevronRight,
  mdiMapMarker,
  mdiPhoneClassic,
  mdiEmailOutline,
} from "@mdi/js";

export const Footer = () => {
  return (
    <div className="bg-black text-white px-4 py-8">
      <div className="flex flex-col md:flex-row md:justify-around gap-6 md:gap-0">
        <div className="w-full md:w-1/5 flex flex-col gap-5">
          <img className="invert size-10" src="logo.webp" alt="Logo" />
          <p className="text-xs">
            We’re a tiny little company based in New Delhi trying to bring you
            the latest fashion of the best quality at the lowest possible
            prices.
          </p>
          <a
            href="https://www.instagram.com/utkarshcollections/"
            target="_blank"
          >
            <img className="size-10" src="instagram.webp" alt="Instagram" />
          </a>
        </div>

        <div className="w-full md:w-1/5 flex flex-col gap-3 mt-4">
          <h1 className="font-bold text-sm">Quick Links</h1>
          <div className="text-xs flex flex-col gap-2">
            {["Home", "Shop", "Blog", "Contact Us"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <Icon className="size-4" path={mdiChevronRight} /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/5 flex flex-col gap-3 mt-4">
          <h1 className="font-bold text-sm">Categories</h1>
          <div className="text-xs flex flex-col gap-2">
            {[
              "Daily Wear/Earings",
              "Earings under 199",
              "Combos",
              "Choker/Necklace",
              "Kundan Jewelry",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <Icon className="size-4" path={mdiChevronRight} /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/5 flex flex-col gap-3 mt-4">
          <h1 className="font-bold text-sm">Policies</h1>
          <div className="text-xs flex flex-col gap-2">
            {[
              "Privacy Policy",
              "Terms and Conditions",
              "Cancellation & Refund Policy",
              "Privacy & Payments",
              "Shipping & Tracking",
              "Disclaimer Policy",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <Icon className="size-4" path={mdiChevronRight} /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/5 flex flex-col gap-3 mt-4">
          <h1 className="font-bold text-sm">Get In Touch</h1>
          <div className="text-xs flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Icon path={mdiMapMarker} className="size-4" />
              New Delhi - 110018
            </div>
            <div className="flex items-center gap-2">
              <Icon path={mdiPhoneClassic} className="size-4" />
              9953612665
            </div>
            <div className="flex items-center gap-2">
              <Icon path={mdiEmailOutline} className="size-4" />
              info@utkarshcollections.com
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />

      <div className="text-center text-sm">© 2025 Utkarsh Collections</div>
    </div>
  );
};
