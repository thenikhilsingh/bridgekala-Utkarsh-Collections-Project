import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import Blog from "./components/Blog.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Cart from "./components/Cart.jsx";
import { CartProvider } from "./components/CartContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      {" "}
      {/* ✅ Wrap everything */}
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
