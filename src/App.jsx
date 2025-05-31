import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Strip1 from "./components/Strip1";
import { CartProvider } from "./components/CartContext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Strip1 />
      <Header />
      <Outlet />
      <Footer />
    </CartProvider>
  );
}

export default App;
