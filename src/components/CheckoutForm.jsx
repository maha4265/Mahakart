import React, { useState } from "react";
import { Box, TextField, Button, Paper } from "@mui/material";
import Typography from "@mui/joy/Typography";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Save order data in local storage
    const orderData = {
      formData,
      items: cart,
      total: totalPrice,
      date: new Date().toLocaleString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, orderData]));

    // Clear cart after order is placed
    clearCart();

    // Redirect to order history
    navigate("/order-history");
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h1" level="title-lg" sx={{ textAlign: "center", fontWeight: "bold" }}>
          Checkout
        </Typography>

        <Typography level="title-md" sx={{ textAlign: "center", mt: 2 }}>
          <strong>Total Price: </strong> ₹{totalPrice}
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} required margin="normal" />
          <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required margin="normal" />
          <TextField fullWidth label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} required margin="normal" />
          <TextField fullWidth label="Address" name="address" value={formData.address} onChange={handleChange} required margin="normal" />
          <TextField fullWidth label="City" name="city" value={formData.city} onChange={handleChange} required margin="normal" />
          <TextField fullWidth label="Zip Code" name="zip" value={formData.zip} onChange={handleChange} required margin="normal" />

          <Button type="submit" variant="contained" color="success" fullWidth sx={{ mt: 2 }}>
            Place Order
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
