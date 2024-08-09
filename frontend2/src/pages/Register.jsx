import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

function Register() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="register-container" style={{ textAlign: "center" }}>
      <Form route="/api/user/register/" method="register" />
      
      <button
        onClick={goToLogin}
        style={{
          backgroundColor: "#28a745", 
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
        Login
      </button>
    </div>
  );
}

export default Register;
