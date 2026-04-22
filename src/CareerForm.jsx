import React, { useState } from "react";

function CareerForm() {

  const [formData, setFormData] = useState({
    academic: "",
    careerExpectation: "",
    interest: "",
    skills: "",
    personality: "",
    

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
      const response = await fetch("http://localhost:5000/api/career/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data);
      alert("Data Saved Successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Career Form</h2>

      <form onSubmit={handleSubmit}>
        

        <input
          type="text"
          name="academic"
          placeholder="Enter Academic Details"
          onChange={handleChange}
          value={formData.academic}
 
        />

        <input
          type="text"
          name="interest"
          placeholder="Enter Interest"
          onChange={handleChange}
          value={formData.interest}
        />

        <input
          type="text"
          name="skills"
          placeholder="Enter Skill"
          onChange={handleChange}
          value={formData.skill}
        />
        
        <input
          type="text"
          name="personality"
          placeholder="Enter Personality Traits"
          onChange={handleChange}
          value={formData.personality}
        />
        <input
          type="text"
          name="careerExpectation"
          placeholder="Enter Career Expectation"
          onChange={handleChange}
          value={formData.careerExpectation}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CareerForm;
