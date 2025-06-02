import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

const blogPosts = [
  {
    img: "blogimg1.webp",
    alt: "Choker Style",
    date: "January 29, 2024 • by utkarshadmin",
    title: "Trendy Choker Styles to Elevate Your Outfit",
    desc: "Introduction In the ever-evolving world of fashion, accessories play a pivotal role...",
  },
  {
    img: "blogimg2.webp",
    alt: "Oxidized Jewelry",
    date: "January 29, 2024 • by utkarshadmin",
    title:
      "From Traditional to Trendy: The Evolution of Oxidized Jewelry Designs",
    desc: "Introduction In the diversification of Indian jewelry, the evolution of designs reflects...",
  },
  {
    img: "blogimg3.webp",
    alt: "Handmade Jewelry",
    date: "January 29, 2024 • by utkarshadmin",
    title: "Timeless Elegance: Embracing Handmade Jewelry for Every Occasion",
    desc: "Introduction In the vibrant shade of Indian culture, jewelry holds a special...",
  },
  {
    img: "blogimg1.webp",
    alt: "Choker Style 2",
    date: "February 1, 2024 • by utkarshadmin",
    title: "Choker Styles You Must Try",
    desc: "Chokers are back in fashion. Here’s how to style them...",
  },
  {
    img: "blogimg2.webp",
    alt: "Oxidized Jewelry 2",
    date: "February 5, 2024 • by utkarshadmin",
    title: "Oxidized Jewelry Trends 2024",
    desc: "Exploring the latest oxidized jewelry designs for 2024...",
  },
];

const JewelryBlog = () => {
  const cardsToShow = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = blogPosts.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const visibleSlides = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleSlides.push(blogPosts[(currentIndex + i) % total]);
  }

  return (
    <div className="px-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-8">
        From Our Blog
      </h1>

      <div className="max-w-full md:max-w-4xl mx-auto py-4 md:py-10 flex items-center justify-center gap-3 md:gap-6 relative flex-wrap md:flex-nowrap">
        
        
        <button
          onClick={prevSlide}
          aria-label="Previous"
          className="hidden md:block p-2 md:p-3 bg-gray-600 rounded-full shadow hover:bg-gray-500 cursor-pointer"
        >
          <Icon path={mdiChevronLeft} size={1} />
        </button>

        {/* Blog Cards */}
        <div className="flex gap-3 overflow-x-auto md:overflow-visible">
          {visibleSlides.map((post, idx) => (
            <div
              key={idx}
              className="w-[260px] sm:w-[280px] md:w-[200px] lg:w-[280px] flex-shrink-0 bg-white rounded shadow overflow-hidden text-sm"
            >
              <img
                src={post.img}
                alt={post.alt}
                className="w-full h-[130px] sm:h-[140px] object-cover"
              />
              <div className="p-3 h-[180px] sm:h-[200px] overflow-hidden">
                <p className="text-gray-500 text-xs mb-1">{post.date}</p>
                <h2 className="font-semibold text-sm sm:text-base mb-1 leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-700 text-xs">{post.desc}</p>
              </div>
            </div>
          ))}
        </div>

        
        <button
          onClick={nextSlide}
          aria-label="Next"
          className="hidden md:block p-2 md:p-3 bg-gray-600 rounded-full shadow hover:bg-gray-500 cursor-pointer"
        >
          <Icon path={mdiChevronRight} size={1} />
        </button>

      </div>
    </div>
  );
};

export default JewelryBlog;
