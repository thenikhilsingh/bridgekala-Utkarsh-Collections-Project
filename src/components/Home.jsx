import React, { useEffect, useState } from "react";

const images = ["banner1.webp", "banner2.webp", "banner3.webp"];

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
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className="w-full flex-shrink-0 "
          />
        ))}
      </div>

      {/* productbycategory */}

      <div class="p-8 bg-white">
        <h2 class="text-3xl font-semibold text-center mb-8">
          Product Categories
        </h2>

        <div class="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto w-[1000px]">
          {/* <!-- Card 1 --> */}
          <div class="bg-gray-100 p-6 rounded-lg w-[400px] flex flex-col  justify-between">
            <div>
              <h3 class="text-xl font-bold mb-4">Daily Wear/Earrings</h3>
            </div>
            <img src="cat1.png" alt="Sofa" className=" mx-auto size-40" />
            <button class="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800 self-start">
              SHOP NOW
            </button>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="bg-blue-100 p-6 rounded-lg w-[200px] flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold mb-4 flex text-center">
                Earrings under 199
              </h3>
            </div>
            <img src="cat2.png" alt="Sofa" className=" mx-auto size-40" />
             <button class="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-400 self-start">
              SHOP NOW
            </button>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="bg-yellow-100 p-6 rounded-lg w-[200px] flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold mb-4 text-center">TOY TRAIN</h3>
            </div>
            <img src="cat3.png" alt="Sofa" className=" mx-auto size-40" />
          </div>

          {/* <!-- Card 4 --> */}
          <div class="bg-orange-100 p-6 rounded-lg w-[200px] flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold mb-4 text-center">TOY TRAIN</h3>
            </div>
           <img src="cat4.png" alt="Sofa" className=" mx-auto size-40" />
          </div>

          {/* <!-- Card 5 --> */}
          <div class="bg-green-100 p-6 rounded-lg w-[200px] flex flex-col justify-between">
            <div>
             
              <h3 class="text-xl font-bold mb-4 text-center">PARTY DECORS</h3>
            </div>
           <img src="cat5.png" alt="Sofa" className=" mx-auto size-40" />
          </div>

          {/* <!-- Card 6 --> */}
          <div class="bg-pink-100 p-6 rounded-lg w-[400px] flex flex-col justify-between">
            <div>
             
              <h3 class="text-xl font-bold mb-4">DIAMOND RING</h3>
            </div>
           <img src="cat6.png" alt="Sofa" className=" mx-auto size-40" />
            <button class="bg-red-600 text-white text-sm px-4 py-2 rounded hover:bg-red-700 self-start">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
