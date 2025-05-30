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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>
      <Route path="shop" element={<Shop />}></Route>
      <Route path="blog" element={<Blog />}></Route>
      <Route path="contact-us" element={<ContactUs />}></Route>
      {/* <Route path="shop/product/:productid" element={<ProductDetail />}></Route>
      <Route path="message" element={<Message />}></Route> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
