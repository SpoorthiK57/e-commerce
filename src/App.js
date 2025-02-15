import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Footer from "./Components/Footer/Footer";
import mens_banner from "./Components/Assets/banner_mens.png"
import womens_banner from "./Components/Assets/banner_women.png"
import kids_banner from "./Components/Assets/banner_kids.png"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/mens" element={<ShopCategory banner={mens_banner} category="men" />}></Route>
          <Route
            path="/womens"
            element={<ShopCategory  banner={womens_banner} category="women" />}
          ></Route>
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          ></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
