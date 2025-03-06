import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert
} from "@mui/material";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.email === email)) {
      setError("User already registered! Please log in.");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! You can now log in.");
    navigate("/login");
  };

  return (
    <><Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: "center",
          bgcolor: "white",
        }}
      >
        <Typography variant="h4" color="dark" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleRegister}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Register
          </Button>
        </form>
      </Box>
    </Container><br></br><br></br></>
  );
}
