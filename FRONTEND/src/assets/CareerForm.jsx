

import React, { useState } from "react";
import axios from "axios";

function CareerForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/career/submit",
        formData
      );

      console.log(response.data);
      alert("Data Saved Successfully");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Career Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="interest"
          placeholder="Enter Interest"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CareerForm;
