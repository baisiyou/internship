import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Pen from "./pages/Pen";
import Ink1 from "./pages/Ink1";
import About from "./pages/About";
import Paste from "./pages/Paste";
import Refill from "./pages/Refill";
import Contactus from "./pages/Contactus";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart";
import { ShopContextProvider } from "./context/shop-context";
import { AuthProvider } from "./context/authContext";
import Header from "./components/header";
import Home1 from "./components/home";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Login1 from './components/Login';
import Logout from './components/Logout';
import App1 from './components/App';
import Dashboard from './components/Dashboard';
function App() {
  const location = useLocation();
  const pathname = location.pathname;

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
      default:
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
      <AuthProvider>
        <Header />
        <div className="w-full h-screen flex flex-col">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/pen" element={<Pen />} />
            <Route path="/ink" element={<Ink1 />} />
            <Route path="/about" element={<About />} />
            <Route path="/paste" element={<Paste />} />
            <Route path="/crud-app" element={<Dashboard />} />
            <Route path="/home" element={<Login1 />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/home" element={<Logout />} />
            <Route path="/home" element={<App1 />} />
            <Route
              path="/shop"
              element={
                <ShopContextProvider>
                  <Navbar />
                  <Shop />
                </ShopContextProvider>
              }
            />
            <Route
              path="/contact"
              element={
                <ShopContextProvider>
                  <Navbar />
                  <Contact />
                </ShopContextProvider>
              }
            />
            <Route
              path="/cart"
              element={
                <ShopContextProvider>
                  <Navbar />
                  <Cart />
                </ShopContextProvider>
              }
            />
            <Route
              path="/refill"
              element={
                <ShopContextProvider>
                  <Navbar />
                  <Refill />
                </ShopContextProvider>
              }
            />
            <Route
  path="/login"
  element={
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      height: '100vh', 
    }}>
      <Login className="text-red-800 text-xl font-semibold sm:text-2xl" />
    </div>
  }
/>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start=]', height: '100vh' }}>
    <Login />
  </div>
} />
            <Route path="/register" element={
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh'
    }}>
        <Register />
    </div>
} />

            
          </Routes>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;

