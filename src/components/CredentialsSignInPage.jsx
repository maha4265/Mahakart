import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const providers = [{ id: "credentials", name: "Email and Password" }];

export default function CredentialsSignInPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [error, setError] = React.useState(""); 

  const signIn = async (provider, formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const email = formData.get("email");
        const password = formData.get("password");
  
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((user) => user.email === email && user.password === password);
  
        if (user) {
          alert(`Login successful! Welcome, ${email}`);
          localStorage.setItem("userEmail", email);
          window.dispatchEvent(new Event("userLogin"));
  
          navigate("/");
          resolve();
        } else {
          setError("Invalid email or password. Please try again.");
          reject(new Error("Invalid credentials"));
        }
      }, 300);
    });
  };
  
  

  return (
    <AppProvider theme={theme}>
      {error && (
          <Typography color="error" sx={{ textAlign: "center", mt: 2 }}>
            {error}
          </Typography>
        )}
      <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
        <SignInPage
          signIn={(provider, formData) =>
            signIn(provider, formData).catch(() => {})
          }
          providers={providers}
          slotProps={{ emailField: { autoFocus: false } }}
        />
        
      </Box>
    </AppProvider>
  );
}
