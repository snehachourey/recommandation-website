import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dashboardImg from "./assets/dashboard.png";



const AcademicNew = () => {
 
  const navigate = useNavigate();
  const [currentClass, setCurrentClass] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [marks, setMarks] = useState("");
  
  const subjectList = [
    "Maths",
    "Science",
    "Biology",
    "Computer/IT",
    "Commerce",
    "Economics",
    "Arts",
    "Languages",
  ];



  const toggleSubject = (sub) => {
    setSubjects((prev) =>
      prev.includes(sub)
        ? prev.filter((s) => s !== sub)
        : [...prev, sub]
    );
  };

  return (
    <>
    <div className="margin">
    <div className="academic-wrapper">
      {/* Header */}
      <div className="top-bar">
        <img src={dashboardImg} alt="Dashboard Logo" className="dashboard-img" />
        <h2>Career Compass</h2>
        <span>Career Questionnaire</span>
      </div>

      {/* Progress */}
      <div className="progress-section">
        <p>Section 1 of 5</p>
        <div className="progress-bar">
          <div className="progress-fill" />
        </div>
        <span className="percent">20% Completed</span>
      </div>

      {/* Card */}
      <div className="card">
        <div className="icon">🎓</div>
        <h1>Academic Background</h1>
        <p>Tell us about your education / अपनी शिक्षा के बारे में बताएं</p>

        {/* Current Class */}
        <label>Current Class <span className="Star">*</span></label>
        <select
          value={currentClass}
          onChange={(e) => setCurrentClass(e.target.value)}
        >
          <option value="">Select your class</option>
          <option>Class 10</option>
          <option>Class 12</option>
          <option>Graduate</option>
          <option>Post Graduate</option>
        </select>

        {/* Favorite Subjects */}
        <label>Favorite Subjects  <span className="Star">*</span></label>
        <div className="grid">
          {subjectList.map((sub) => (
            <button
              key={sub}
              className={subjects.includes(sub) ? "active" : ""}
              onClick={() => toggleSubject(sub)}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* Average Marks */}
        <label>Average Marks <span className="Star">*</span></label>
        <div className="grid">
          {["90%+", "75-90%", "60-75%", "Below 60%"].map((m) => (
            <button
              key={m}
              className={marks === m ? "active" : ""}
              onClick={() => setMarks(m)}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="actions ">
         
          <button className="next" onClick={()=>{navigate("/intrest")}} >Next</button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default AcademicNew;
