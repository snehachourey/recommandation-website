import React from "react";
import {useNavigate} from "react-router-dom";
import dashboardImg from "./assets/dashboard.png";

const Personality = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="margin">
      <div className="academic-wrapper">

        {/* Top Bar */}
        <div className="top-bar">
          <img src={dashboardImg} alt="Dashboard Logo" className="dashboard-img" />
          <h2>CareerCompass</h2>
          <span>Career Questionnaire</span>
        </div>

        {/* Progress */}
        <div className="progress-section">
          <p>Section 4 of 5</p>
          <div className="progress-bar">
            <div className="progress-fill3" />
          </div>
          <span className="percent">80% Completed</span>
        </div>

        {/* Container */}
        <div className="intrest-container">

          {/* Header */}
          <div className="intrest-header">
            <div className="icon-box">🧡</div>
            <h2>Personality Type</h2>
            <p className="subtitle">
              How would you describe yourself? / आप स्वयं को कैसे बताएंगे?
            </p>
          </div>

          {/* Question 1 */}
          <div className="question-block">
            <h3>
             आप किस तरह काम करना पसंद करते हैं?
              <span>*</span>
            </h3>
  {/* {["logical games/coding ", "Nature health related cheeje", "buisness ideas/money topices", "Drawing writing creativity"] */}
            <div className="option-grid">
              <div className="option-card">Alone</div>
              <div className="option-card">Team</div>
              
            </div>
            {/* <div className="option-grid">
              <div className="option-card">logical games/coding</div>
              <div className="option-card"> Nature health related cheeje</div>
              <div className="option-card">buisness ideas/money topices </div>
              <div className="option-card">Drawing writing creativity</div>
            </div> */}
          </div>
          
          <div className="question-block">
            <h3>
             क्या आप risk लेने में comfortable हैं?
              <span>*</span>
            </h3>
  {/* {["logical games/coding ", "Nature health related cheeje", "buisness ideas/money topices", "Drawing writing creativity"] */}
            <div className="option-grid">
              <div className="option-card">Yes</div>
              <div className="option-card">Sometimes</div>
              <div className="option-card">No </div>
             
            </div>
          </div>

          {/* Question 2 */}
          <div className="question-block">
            <h3>
              Preferred Work Environment / पसंदीदा कार्य वातावरण
              <span>*</span>
            </h3>

            <div className="option-grid">
              <div className="option-card">🏢 Office</div>
              <div className="option-card">🌳 Outdoor</div>
              <div className="option-card">🧪 Lab / Hospital</div>
              <div className="option-card">🏫 Classroom</div>
              <div className="option-card">🏠 Remote</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="button-row">
            <button className="prev" onClick={()=>{navigate("/intrest")}}>Previous</button>
            <button className="next" onClick={()=>{navigate("/career-expectation")}}>Next</button>
          </div>

        </div>
      </div>
      </div>
    </>
  );
};

export default Personality;
