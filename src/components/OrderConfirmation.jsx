import React from "react";
import { Box, Button, Paper } from "@mui/material";
import Typography from "@mui/joy/Typography";
import { useCart } from "./CartContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function OrderConfirmation() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const orderDetails = location.state; // Receiving data from CheckoutForm

  const handleConfirmOrder = () => {
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = { id: Date.now(), ...orderDetails, cart };
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    clearCart();
    navigate("/order-history");
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography level="h1" sx={{ textAlign: "center", fontWeight: "bold" }}>
          Confirm Order
        </Typography>

        <Typography level="title-md" sx={{ mt: 2 }}>Product Details:</Typography>
        {cart.map((product, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2, p: 2, borderBottom: "1px solid #ccc" }}>
            <img src={product.url} alt={product.title} style={{ width: 80, height: 80, objectFit: "cover" }} />
            <Typography level="body-md">{product.title} - ₹{product.price}</Typography>
          </Box>
        ))}

        <Typography level="title-md" sx={{ mt: 2 }}>Shipping Details:</Typography>
        <Typography level="body-md"><strong>Name:</strong> {orderDetails.name}</Typography>
        <Typography level="body-md"><strong>Email:</strong> {orderDetails.email}</Typography>
        <Typography level="body-md"><strong>Phone:</strong> {orderDetails.phone}</Typography>
        <Typography level="body-md"><strong>Address:</strong> {orderDetails.address}, {orderDetails.city}, {orderDetails.zip}</Typography>

        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
          <Button variant="contained" color="success" fullWidth onClick={handleConfirmOrder}>
            Confirm & Place Order
          </Button>
          <Button variant="contained" color="error" fullWidth onClick={() => navigate("/checkout")}>
            Edit Details
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
