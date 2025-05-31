import React, { useEffect, useState } from "react";
import NewArrivals from "./NewArrivals";
import UtkarshCollectionPosts from "./UtkarshCollectionPosts";
import TopSellingItems from "./TopSellingItems";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import OurBlogPosts from "./OurBlogPosts";
import Icon from "@mdi/react";
import { mdiWhatsapp } from "@mdi/js";

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
    <div className="pt-[25vh]  overflow-hidden relative">
      <div>
        <Swiper
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          centeredSlides={true}
          modules={[Autoplay]}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`Slide ${i}`}
                className="w-full flex-shrink-0 h-99 "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div class="p-8 bg-white">
        <h2 class="text-3xl font-semibold text-center mb-8">
          Product Categories
        </h2>

        <div class="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto w-[1000px]">
          <div class="bg-gray-100 p-6 rounded-lg w-[400px] flex flex-col  justify-between hover:bg-gray-200">
            <div>
              <h3 class="text-xl font-bold mb-4">Daily Wear/Earrings</h3>
            </div>
            <img src="cat1.png" alt="Sofa" className=" mx-auto size-40" />
            <button class="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800 self-start cursor-pointer">
              SHOP NOW
            </button>
          </div>

          <div class="bg-blue-100 p-6 rounded-lg w-[200px] flex flex-col justify-between items-center hover:bg-blue-200 ">
            <div>
              <h3 class="text-xl font-bold mb-4 flex text-center">
                Earrings under 199
              </h3>
            </div>
            <img src="cat2.png" alt="Sofa" className=" mx-auto size-40" />
            <button class="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-400 cursor-pointer">
              SHOP NOW
            </button>
          </div>

          <div class="bg-yellow-100 p-6 rounded-lg w-[200px] flex flex-col justify-between items-center hover:bg-yellow-200">
            <div>
              <h3 class="text-xl font-bold mb-4 text-center">TOY TRAIN</h3>
            </div>
            <img src="cat3.png" alt="Sofa" className=" mx-auto size-40" />
            <button class="bg-[#b8af5e] text-white text-sm px-4 py-2 rounded hover:bg-[#dfd57a] cursor-pointer">
              SHOP NOW
            </button>
          </div>

          <div class="bg-orange-100 p-6 rounded-lg w-[200px] flex flex-col justify-between items-center hover:bg-orange-200">
            <div>
              <h3 class="text-xl font-bold mb-4 text-center">TOY TRAIN</h3>
            </div>
            <img src="cat4.png" alt="Sofa" className=" mx-auto size-40" />
            <button class="bg-[#fc7cf5] text-white text-sm px-4 py-2 rounded hover:bg-[#f899f3] cursor-pointer">
              SHOP NOW
            </button>
          </div>

          <div class="bg-green-100 p-6 rounded-lg w-[200px] flex flex-col justify-between items-center hover:bg-green-200">
            <div>
              <h3 class="text-xl font-bold mb-4 text-center">PARTY DECORS</h3>
            </div>
            <img src="cat5.png" alt="Sofa" className=" mx-auto size-40" />
            <button class="bg-[#2bf1d7] text-white text-sm px-4 py-2 rounded hover:bg-[#7affed] cursor-pointer">
              SHOP NOW
            </button>
          </div>

          <div class="bg-pink-100 p-6 rounded-lg w-[400px] flex flex-col justify-between hover:bg-pink-200">
            <div>
              <h3 class="text-xl font-bold mb-4">DIAMOND RING</h3>
            </div>
            <img src="cat6.png" alt="Sofa" className=" mx-auto size-40" />
            <button class="bg-red-600 text-white text-sm px-4 py-2 rounded hover:bg-red-700 self-start cursor-pointer">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <NewArrivals />
      <UtkarshCollectionPosts />
      <TopSellingItems />
      <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 bg-white relative">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Elevate Your Style: Explore Exclusive <br />
            Luxury Products at Our online Store
          </h2>
          <p className="text-gray-700 mb-6">
            Immerse yourself in luxury as you explore our online store’s
            exclusive collection of handmade Jewelry. From exquisite accessories
            to timeless pieces, our online store offers a haven for those
            seeking unparalleled elegance. Elevate your style effortlessly with
            our exclusive luxury products, all just a click away. Redefine your
            aesthetic and embrace the epitome of refined taste with our curated
            selection, available at your fingertips in our online store.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition duration-300">
            Shop Now
          </button>
        </div>

        <div className="lg:w-1/2 flex justify-center gap-6">
          <img
            src="luxury-product-1.webp"
            alt="Earrings 1"
            className="w-40 lg:w-56 rounded shadow-lg"
          />
          <img
            src="luxury-product-2.webp"
            alt="Earrings 2"
            className="w-40 lg:w-56 rounded shadow-lg"
          />
        </div>
      </div>
      (
      <div className="bg-gray-50 py-12 px-4 lg:px-20 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center space-y-4">
            <img src="gifticon.webp" alt="Free Gift" className="size-15" />
            <h3 className="text-lg font-semibold">Free Gift</h3>
            <p className="text-gray-700">
              Get FREE gift worth rupees 299 on all orders above 999
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <img
              src="discounticon.webp"
              alt="5% Extra Discount"
              className="size-15"
            />
            <h3 className="text-lg font-semibold">5% Extra Discount</h3>
            <p className="text-gray-700">
              We provide additional 5% discount on all Prepaid Orders!!
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <img
              src="checkouticon.webp"
              alt="Secure Checkout"
              className="size-15"
            />
            <h3 className="text-lg font-semibold">100% Secure Checkout</h3>
            <p className="text-gray-700">
              Most Secure and hassle free Online Payment Options
            </p>
          </div>
        </div>
      </div>
      <OurBlogPosts />
      <a
        href="https://wa.me/+919911819654"
        target="_blank"
        className="fixed bottom-6 right-6 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg z-50"
      >
        <Icon path={mdiWhatsapp} className="w-8 h-8" color="white" />
      </a>
    </div>
  );
}
