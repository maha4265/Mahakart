import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, Button, Stack, ListItem, ListItemText } from "@mui/material";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const handleDeleteOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
          Order History
        </Typography>

        {orders.length === 0 ? (
          <Typography sx={{ textAlign: "center", mt: 2 }}>No orders found.</Typography>
        ) : (
          orders.map((order, index) => (
            <Paper key={index} sx={{ p: 2, mt: 2 }}>
              <Typography><strong>Name:</strong> {order.formData.name}</Typography>
              <Typography><strong>Email:</strong> {order.formData.email}</Typography>
              <Typography><strong>Total:</strong> ₹{order.total}</Typography>
              <Typography><strong>Date:</strong> {order.date}</Typography>

{order.items && order.items.length > 0 && (
  <>
    <Typography sx={{ mt: 2, fontWeight: "bold" }}>Products:</Typography>
    <Stack direction="row" spacing={2} sx={{ overflowX: "auto", p: 1 }}>
      {order.items.map((item, idx) => (
        <ListItem key={idx} sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "auto" }}>
          <img 
            src={item.url} 
            alt={item.title} 
            style={{ width: 50, height: 50, objectFit: "cover", marginBottom: 5 }} 
          />
          <ListItemText
            primary={item.title}
            secondary={`Rs${item.price}`}
            sx={{ textAlign: "center" }}
          />
        </ListItem>
      ))}
    </Stack>
  </>
)}

              <Button 
                variant="contained" 
                color="error" 
                fullWidth 
                sx={{ mt: 2 }} 
                onClick={() => handleDeleteOrder(index)}
              >
                Delete Order
              </Button>
            </Paper>
          ))
        )}
      </Paper>
    </Box>
  );
}
