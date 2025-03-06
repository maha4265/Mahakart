import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail") || null);

  const login = (email) => {
    setUserEmail(email);
    localStorage.setItem("userEmail", email); // Persist login
  };

  const logout = () => {
    setUserEmail(null);
    localStorage.removeItem("userEmail"); // Clear on logout
  };

  return (
    <AuthContext.Provider value={{ userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
