import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

function Login() {
  const navigate = useNavigate();

  // Function to handle navigation to the registration page
  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <Form route="/api/token/" method="login" />

      {/* Register Button */}
      <button
        onClick={goToRegister}
        style={{
          backgroundColor: "#007bff", 
          color: "white",
          border: "none",
          padding: "10px 20px", 
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.2s ease", 
          marginTop: "20px", 
          width: "100%", 
          maxWidth: "300px", 
          textAlign: "center", 
          display: "block", 
          marginLeft: "auto", 
          marginRight: "auto", 
        }}
      >
        Register
      </button>
    </div>
  );
}

export default Login;
