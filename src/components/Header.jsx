import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "./CartContext";
import { Avatar, Menu, MenuItem } from "@mui/material";

export default function Header() {
  const { cart } = useCart();
  
  const [userEmail, setUserEmail] = useState(null);
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const storedUserEmail = localStorage.getItem("userEmail");
    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
    }
    const handleStorageChange = () => {
      setUserEmail(localStorage.getItem("userEmail"));
    };
    window.addEventListener("storage", handleStorageChange);
    
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setUserEmail(null);
    handleClose();
  };
  useEffect(() => {
    const handleUserLogin = () => {
      setUserEmail(localStorage.getItem("userEmail"));
    };
  
    window.addEventListener("userLogin", handleUserLogin);
  
    return () => {
      window.removeEventListener("userLogin", handleUserLogin);
    };
  }, []);
  
  return (
    <nav>
      <h2 className="logo">MahaKart</h2>
      <ul>
        <li>
          <Link to="/" className="nav-item">
            <HomeIcon className="nav-icon" fontSize="medium" />
            <span>HOME</span>
          </Link>
        </li>
        <li>
          <Link to="/order-history" className="nav-item">MY ORDERS</Link>
        </li>

        {!userEmail ? (
          <>
            <li><Link to="/register" className="nav-item">REGISTER</Link></li>
            <li><Link to="/login" className="nav-item">LOGIN</Link></li>
          </>
        ) : (
          <>
            <li>
              <Avatar
                sx={{ bgcolor: "purple", width: 36, height: 36, cursor: "pointer", marginRight: "20px" }}
                onClick={handleAvatarClick}
              >
                {userEmail ? userEmail.charAt(0).toUpperCase() : "?"}
              </Avatar>
            </li>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem 
                onClick={handleLogout} 
                sx={{ 
                  backgroundColor: "rgb(24, 116, 5)", 
                  color: "white", 
                  fontSize: "20px", 
                  fontWeight: "900",
                  "&:hover": { backgroundColor: "rgb(24, 107, 3)" }
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </>
        )}

        <li>
          <Link to="/cart" className="nav-item">
            <ShoppingCartIcon className="nav-icon" />
            <span>{cart.length}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
