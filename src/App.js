import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import './styles/header.css';
import './styles/footer.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import KidsCollection from "./components/KidsCollection";
import WomenCollection from "./components/WomenCollection";
import GirlsCollection from "./components/GirlsCollection";
import CredentialsSignInPage from "./components/CredentialsSignInPage";
import Register from "./components/Register";
import AboutPage from "./components/AboutPage";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import CheckoutForm from "./components/CheckoutForm";
import OrderConfirmation from "./components/OrderConfirmation";
import OrderHistory from "./components/OrderHistory";
import { AuthProvider } from "./components/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<CredentialsSignInPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/kidscollection" element={<KidsCollection />} />
            <Route path="/womencollection" element={<WomenCollection />} />
            <Route path="/girlscollection" element={<GirlsCollection />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/confirm-order" element={<OrderConfirmation />} />
            <Route path="/order-history" element={<OrderHistory />} />
          </Routes>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
