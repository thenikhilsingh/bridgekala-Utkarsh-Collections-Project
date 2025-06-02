import React, { useEffect, useState } from "react";
import NewArrivals from "./NewArrivals";
import UtkarshCollectionPosts from "./UtkarshCollectionPosts";
import TopSellingItems from "./TopSellingItems";
import OurBlogPosts from "./OurBlogPosts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Icon from "@mdi/react";
import { mdiWhatsapp } from "@mdi/js";

import "swiper/css";

const images = [
  "banner1.webp",
  "banner2.webp",
  "banner3.webp",
  "banner4.webp",
  "banner5.webp",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-[29vh] sm:pt-[30vh] md:pt-[31vh] overflow-hidden relative">
      {/* Banner Swiper */}
      <Swiper
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={0}
        centeredSlides={true}
        modules={[Autoplay]}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Slide ${i}`}
              className="w-full h-56 sm:h-82 md:h-77 lg:h-91"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Product Categories */}
      <div className="p-4 md:p-8 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-6 md:mb-8">
          Product Categories
        </h2>

        <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-4 md:gap-6 max-w-6xl mx-auto w-full pb-4">
          {[
            {
              title: "Daily Wear/Earrings",
              img: "cat1.png",
              bg: "bg-gray-100",
              hover: "hover:bg-gray-200",
              btn: "bg-black hover:bg-gray-800",
            },
            {
              title: "Earrings under 199",
              img: "cat2.png",
              bg: "bg-blue-100",
              hover: "hover:bg-blue-200",
              btn: "bg-blue-500 hover:bg-blue-400",
            },
            {
              title: "TOY TRAIN",
              img: "cat3.png",
              bg: "bg-yellow-100",
              hover: "hover:bg-yellow-200",
              btn: "bg-[#b8af5e] hover:bg-[#dfd57a]",
            },
            {
              title: "TOY TRAIN",
              img: "cat4.png",
              bg: "bg-orange-100",
              hover: "hover:bg-orange-200",
              btn: "bg-[#fc7cf5] hover:bg-[#f899f3]",
            },
            {
              title: "PARTY DECORS",
              img: "cat5.png",
              bg: "bg-green-100",
              hover: "hover:bg-green-200",
              btn: "bg-[#2bf1d7] hover:bg-[#7affed]",
            },
            {
              title: "DIAMOND RING",
              img: "cat6.png",
              bg: "bg-pink-100",
              hover: "hover:bg-pink-200",
              btn: "bg-red-600 hover:bg-red-700",
            },
          ].map((cat, i) => (
            <div
              key={i}
              className={`${cat.bg} ${cat.hover} p-4 rounded-lg min-w-[200px] flex flex-col justify-between items-center`}
            >
              <h3 className="text-sm font-bold mb-4 text-center">
                {cat.title}
              </h3>
              <img
                src={cat.img}
                alt={cat.title}
                className="mx-auto size-20 mb-4"
              />
              <button
                className={`${cat.btn} text-white text-sm px-4 py-2 rounded`}
              >
                SHOP NOW
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sections */}
      <NewArrivals />
      <UtkarshCollectionPosts />
      <TopSellingItems />

      {/* Promo Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 bg-white relative">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h2 className="text-3xl lg:text-2xl font-bold mb-6">
            Elevate Your Style: Explore Exclusive <br />
            Luxury Products at Our Online Store
          </h2>
          <p className="text-gray-700 mb-6">
            Immerse yourself in luxury as you explore our online store’s
            exclusive collection of handmade Jewelry. From exquisite accessories
            to timeless pieces, our online store offers a haven for those
            seeking unparalleled elegance.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition duration-300">
            Shop Now
          </button>
        </div>

        <div className="lg:w-1/2 flex justify-center gap-6">
          <img
            src="luxury-product-1.webp"
            alt="Luxury Product 1"
            className="w-36 lg:w-56 rounded shadow-lg"
          />
          <img
            src="luxury-product-2.webp"
            alt="Luxury Product 2"
            className="w-36 lg:w-56 rounded shadow-lg"
          />
        </div>
      </div>

      {/* Perks Section */}
      <div className="bg-gray-50 py-12 px-4 lg:px-20 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center space-y-4">
            <img src="gifticon.webp" alt="Free Gift" className="size-16" />
            <h3 className="text-lg font-semibold">Free Gift</h3>
            <p className="text-gray-700 text-sm">
              Get FREE gift worth ₹299 on all orders above ₹999
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img
              src="discounticon.webp"
              alt="5% Extra Discount"
              className="size-16"
            />
            <h3 className="text-lg font-semibold">5% Extra Discount</h3>
            <p className="text-gray-700 text-sm">
              We provide additional 5% discount on all prepaid orders!
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img
              src="checkouticon.webp"
              alt="Secure Checkout"
              className="size-16"
            />
            <h3 className="text-lg font-semibold">100% Secure Checkout</h3>
            <p className="text-gray-700 text-sm">
              Secure and hassle-free online payment options.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <OurBlogPosts />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+919911819654"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg z-50"
      >
        <Icon path={mdiWhatsapp} className="w-8 h-8" color="white" />
      </a>
    </div>
  );
}
