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
    <div className="bg-black text-white p-6">
      <div className="flex justify-around ">
        <div className="w-45 flex flex-col gap-5">
          <img className="invert size-30" src="logo.webp" alt="" />
          <p>
            We’re a tiny little company based in New Delhi trying to bring you
            the latest fashion of the best quality at the lowest possible
            prices.
          </p>
          <img className="size-10" src="instagram.webp" alt="" />
        </div>

        <div className="w-45 flex flex-col gap-5 mt-4">
          <h1 className="font-bold">Quick Links</h1>
          <div>
            <div className="flex">
              <Icon path={mdiChevronRight} size={1} /> Home
            </div>
            <div className="flex">
              <Icon path={mdiChevronRight} size={1} /> Shop
            </div>
            <div className="flex">
              <Icon path={mdiChevronRight} size={1} /> Blog
            </div>
            <div className="flex">
              <Icon path={mdiChevronRight} size={1} /> Contact Us
            </div>
          </div>
        </div>

        <div className="w-45 flex flex-col gap-5 mt-4">
          <h1 className="font-bold">Categories</h1>
          <div>
            <div className="flex">
              <Icon path={mdiChevronRight} size={1} /> Daily Wear/Earings
            </div>
            <div className="flex">
              <Icon path={mdiChevronRight} size={1} /> Earings under 199
            </div>
            <div className="flex">
              <Icon path={mdiChevronRight} size={1} /> Combos
            </div>
            <div className="flex">
              <Icon path={mdiChevronRight} size={1} /> Choker/Necklace
            </div>
            <div className="flex">
              <Icon path={mdiChevronRight} size={1} /> Kundan Jewelry
            </div>
          </div>
        </div>

        <div className="w-45 flex flex-col gap-5 mt-4">
          <h1 className="font-bold">Policies</h1>
          <div>
            <div className="flex">
              <Icon path={mdiChevronRight} size={1} /> Privacy Policy
            </div>
            <div className="flex">
              <Icon path={mdiChevronRight} size={1} /> Terms and Conditions
            </div>
            <div className="flex">
              <Icon path={mdiChevronRight} size={1} /> Cancellation & Refund
              Policy
            </div>
            <div className="flex">
              <Icon path={mdiChevronRight} size={1} /> Privacy & Payments
            </div>
            <div className="flex">
              <Icon path={mdiChevronRight} size={1} /> Shipping & Tracking
            </div>
            <div className="flex">
              <Icon path={mdiChevronRight} size={1} /> Disclaimer Policy
            </div>
          </div>
        </div>
        <div className="w-60 flex flex-col gap-5 mt-4">
          <h1 className="font-bold">Get In Touch</h1>
          <div>
            <div className="flex gap-2">
              <Icon path={mdiMapMarker} size={1} /> New Delhi - 110018
            </div>
            <div className="flex gap-2">
              <Icon path={mdiPhoneClassic} size={1} />
              9953612665
            </div>
            <div className="flex gap-2">
              <Icon path={mdiEmailOutline} size={1} />
              info@utkarshcollections.com
            </div>
          </div>
        </div>
      </div>

      <hr className="text-gray-700 my-5" />

      <div className="flex items-center justify-center ">
        <div>© 2025 Utkarsh Collections</div>
      </div>
    </div>
  );
};
