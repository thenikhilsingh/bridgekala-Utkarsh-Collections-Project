import React from "react";
import SocialPost from "./SocialPost";

export default function UtkarshCollectionPosts() {
  return (
    <div className="mb-10 px-4">
      {/* Instagram Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-screen-xl mx-auto mb-6 sm:px-5">
        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/utkarshcollections/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-5 h-5 sm:size-7 cursor-pointer"
              src="instagram.webp"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.instagram.com/utkarshcollections/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-sm sm:text-lg cursor-pointer">@utkarshcollections</p>
          </a>
        </div>

        <a
          href="https://www.instagram.com/utkarshcollections/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-black text-xs sm:text-lg text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Follow on Instagram
          </button>
        </a>
      </div>

      {/* Social Posts */}
      <div className="max-w-screen-xl mx-auto">
        <SocialPost />
      </div>
    </div>
  );
}
