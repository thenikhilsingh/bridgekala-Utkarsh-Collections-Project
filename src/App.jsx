import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Strip1 from "./components/Strip1";

function App() {
  return (
    <>
      <Strip1 />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
