import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 5, p: 4, textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" color="textSecondary" >
          Welcome to **MahaKart Dresses**, your go-to destination for trendy, stylish, and elegant
          dresses for every occasion! We believe that **fashion should be fun, empowering, and
          accessible to every girl** who wants to express herself beautifully.
        </Typography>

        <Typography variant="h5" fontWeight="bold" color="secondary" sx={{ mt: 3 }}>
          ✨ Our Mission ✨
        </Typography>
        <Typography variant="h6" color="textSecondary" >
          At **Mahakart Dresses**, we are committed to **bringing the latest fashion trends**
          with premium quality and affordability. Our mission is to make every girl feel
          confident and special in what she wears.
        </Typography>

        <Typography variant="h5" fontWeight="bold" color="secondary" sx={{ mt: 3 }}>
          💖 Our Values 💖
        </Typography>
        <Typography variant="h6" color="textSecondary" >
          **Style & Elegance:** Handpicked collections that reflect beauty & grace.
          **Quality & Comfort:** We ensure premium materials with a perfect fit.
          **Empowerment:** Fashion is confidence! We want you to shine.
          **Customer Love:** Your happiness is our top priority.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3, fontSize: "1.2rem", px: 4, py: 1 }}
          onClick={() => navigate("/")}
        >
          Shop Now
        </Button>
      </Box>
    </Container>
  );
}