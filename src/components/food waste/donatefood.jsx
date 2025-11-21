import React, { useState } from "react";
import "./FormStyles.css";

const FoodDonation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    foodDescription: "",
    address: "",
    quantity: "",
  });
  const [foodImage, setFoodImage] = useState(null); // State for the food image
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFoodImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const donationUrl = "http://localhost:5000/api/food/donate";

    const formDataWithImage = new FormData();
    formDataWithImage.append("name", formData.name);
    formDataWithImage.append("email", formData.email);
    formDataWithImage.append("phone", formData.phone);
    formDataWithImage.append("foodDescription", formData.foodDescription);
    formDataWithImage.append("address", formData.address);
    formDataWithImage.append("quantity", formData.quantity);
    if (foodImage) {
      formDataWithImage.append("foodImage", foodImage); // Add image
    }

    const options = {
      method: "POST",
      body: formDataWithImage,
    };

    try {
      const response = await fetch(donationUrl, options);
      if (response.ok) {
        setMessage("Donation details shared with NGOs!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          foodDescription: "",
          address: "",
          quantity: "",
        });
        setFoodImage(null); // Clear image
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
      <h2>Donate Food</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Name *</label>
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
          <label>Food Description *</label>
          <textarea
            name="foodDescription"
            value={formData.foodDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Pickup Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Quantity (in kg)</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Food Image</label>
          <input type="file" name="foodImage" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default FoodDonation;
