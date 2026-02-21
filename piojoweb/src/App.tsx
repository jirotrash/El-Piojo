import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/shared/Navbar";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Auth from "@/pages/Auth";
import { CartProvider } from "./context/CartContext";
import Vender from "@/pages/Vender";

function App() {

  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/vender" element={<Vender />} />
        </Routes>
      </main>
    </BrowserRouter>
    </CartProvider>
  );
}


export default App;