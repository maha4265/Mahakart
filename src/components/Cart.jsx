import React from "react";
import { Box, IconButton } from "@mui/material";
import Typography from "@mui/joy/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from "./CartContext";
import Button from '@mui/joy/Button';
import { useNavigate } from "react-router-dom"; 

export default function Cart() {
  const { cart, totalPrice, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleRemoveFromCart = (title) => {
    removeFromCart(title);
  };

  const handleCheckout = () => {
    navigate("/checkout"); 
  };

  return (
    <Box sx={{ padding: 3 }}>
  <Typography level="title-lg">Shopping Cart</Typography>

  {cart.length === 0 ? (
    <Typography level="body-md">Your cart is empty.</Typography>
  ) : (
    cart.map((product, index) => (
      <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2, padding: 2, border: "1px solid #ccc", marginBottom: 2 }}>
        <img src={product.url} alt={product.title} style={{ width: 100, height: 100, objectFit: "cover" }} />
        <Typography level="body-md">{product.title} - ₹{product.price}</Typography>
        <IconButton aria-label="delete" onClick={() => handleRemoveFromCart(product.title)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    ))
  )}

  {cart.length > 0 && (
    <>
      <Typography level="title-md" sx={{ marginTop: 2 }}>
        <strong>Total Price: ₹{totalPrice}</strong>
      </Typography>

      <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}> 
        <Button variant="solid" color="success" size="lg" onClick={handleCheckout}>
          Checkout
        </Button>

        <Button variant="solid" color="danger" size="lg" onClick={clearCart}>
          Clear Cart
        </Button>
      </Box>
    </>
  )}
</Box>
  );
}
