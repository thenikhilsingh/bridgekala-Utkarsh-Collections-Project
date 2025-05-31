import React from "react";
import SocialPost from "./SocialPost";

export default function UtkarshCollectionPosts() {
  return (
    <div className="p-15">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img className="size-10" src="instagram.webp" alt="" />
          <p className="text-2xl">@utkarshcollections</p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded">
          Folllow on Instagram
        </button>
      </div>

      <div>
        <SocialPost />
      </div>
    </div>
  );
}
