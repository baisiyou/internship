import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Pen from "./pages/Pen";
import Ink1 from "./pages/Ink1";
import About from "./pages/About";
import Paste from "./pages/Paste";
import Refill from "./pages/Refill";
import Login from "./pages/Login";
import { Navbar } from "./components/navbar";
import {Shop} from "./pages/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/pen":
        title = "";
        metaDescription = "";
        break;
      case "/ink":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/paste":
        title = "";
        metaDescription = "";
        break;
      case "/refill":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pen" element={<Pen />} />
      <Route path="/ink" element={<Ink1 />} />
      <Route path="/about" element={<About />} />
      <Route path="/paste" element={<Paste />} />
      <Route path="/shop" element={<ShopContextProvider><Navbar /><Shop /></ShopContextProvider>} />
      <Route path="/contact" element={<ShopContextProvider><Navbar /><Contact /></ShopContextProvider>} />
      <Route path="/cart" element={<ShopContextProvider><Navbar /><Cart /></ShopContextProvider>} />
      <Route path="/refill" element={<ShopContextProvider><Navbar /><Refill /></ShopContextProvider>} />
      <Route path="/login" element={<ShopContextProvider><Navbar /><Login /></ShopContextProvider>} />
    </Routes>
  </div>
  
  );
  
}
export default App;
