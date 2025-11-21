import React, { useState } from "react";
import "./FormStyles.css";

const NgoRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerUrl = "http://localhost:5000/api/ngos/register";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(registerUrl, options);
      if (response.ok) {
        setMessage("Registration successful!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          description: "",
        });
      } else {
        const errorData = await response.json();
        setMessage("Error: " + (errorData.message || "Something went wrong."));
      }
    } catch (error) {
      setMessage("Error: Unable to connect to the server.");
    }
  };

  return (
    <div className="form-container">
      <h2>NGO Registration</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>NGO Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default NgoRegistration;
