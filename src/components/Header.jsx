import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMagnify, mdiCartOutline, mdiChevronDown } from "@mdi/js";
import { useCart } from "./CartContext";

export const Header = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const linkClass = ({ isActive }) =>
    isActive ? "text-yellow-500 font-bold" : "text-gray-800";

  return (
    <div className="flex justify-around items-center shadow-lg fixed mt-[8vh] w-[100vw] z-10 bg-white py-4">
      <div>
        <img className="size-25" src="logo.webp" alt="" />
      </div>

      <div className="flex font-bold gap-8">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/shop" className={linkClass}>
          <div className="flex items-center">
            Shop
            <Icon path={mdiChevronDown} size={1} />
          </div>
        </NavLink>
        <NavLink to="/blog" className={linkClass}>
          Blog
        </NavLink>
        <NavLink to="/contact-us" className={linkClass}>
          Contact Us
        </NavLink>
      </div>

      <div className="flex gap-5 relative">
        <div>
          <Icon path={mdiMagnify} size={1.5} />
        </div>
        <NavLink to="/cart" className="relative">
          <Icon path={mdiCartOutline} size={1.5} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </NavLink>
      </div>
    </div>
  );
};
