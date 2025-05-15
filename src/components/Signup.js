// Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../Pages/Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      localStorage.setItem("saas_user", JSON.stringify({ name: formData.name })); // save name

      alert("Signup successful!");
      setFormData({ name: "", phone: "" });
      navigate("/");
      window.location.reload(); // reload to update header

    } else {
      alert("Error: " + result.detail);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>WELCOME TO SAAS</h2>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          required
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          required
          pattern="[0-9]{10}"
          onChange={handleChange}
          placeholder="Enter 10-digit phone number"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
