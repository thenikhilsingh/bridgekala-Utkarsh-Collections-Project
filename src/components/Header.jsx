import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { mdiCartOutline } from "@mdi/js";
import { mdiChevronDown } from "@mdi/js";

export const Header = () => {
  return (
    <div className="flex justify-around items-center shadow-lg fixed  mt-[8vh] w-[100vw] z-10 bg-white ">
      <div>
        <img className="size-25 " src="logo.webp" alt="" />
      </div>

      <div className="flex font-bold gap-8">
        <NavLink to="">
          <div>Home</div>
        </NavLink>
        <NavLink to="">
          <div className="flex items-center justify-center">
            <div>Shop</div>
            <Icon path={mdiChevronDown} size={1} />
          </div>
        </NavLink>
        <NavLink to="">
          <div>Blog</div>
        </NavLink>
        <NavLink to="">
          <div>Contact Us</div>
        </NavLink>
      </div>

      <div className="flex gap-5">
        <div>
          <Icon path={mdiMagnify} size={1.5} />
        </div>
        <div>
          <Icon path={mdiCartOutline} size={1.5} />
        </div>
      </div>
    </div>
  );
};
