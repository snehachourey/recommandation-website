import React from "react";
import {useNavigate} from "react-router-dom";
import dashboardImg from "./assets/dashboard.png";

const CareerExpectation = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="academic-wrapper">

        {/* Top Bar */}
        <div className="top-bar">
          <img src={dashboardImg} alt="Dashboard Logo" className="dashboard-img" />
          <h2>CareerCompass</h2>
          <span>Career Questionnaire</span>
        </div>

        {/* Progress */}
        <div className="progress-section">
          <p>Section 5 of 5</p>
          <div className="progress-bar">
            <div className="progress-fill5" />
          </div>
          <span className="percent">100% Completed</span>
        </div>

        {/* Main Container */}
        <div className="intrest-container">

          {/* Header */}
          <div className="intrest-header">
            <div className="icon-box">🎯</div>
            <h2>Career Expectations</h2>
            <p className="subtitle">
              What matters most to you? / आपके लिए सबसे महत्वपूर्ण क्या है?
            </p>
          </div>

          {/* Question 1 */}
          <div className="question-block">
            <h3>
              What are your career goals? / आपके करियर लक्ष्य क्या हैं?
              <span>*</span>
            </h3>
            <p className="hint">
              Select all that matter to you / जो महत्वपूर्ण हैं सभी को चुनें
            </p>

            <div className="option-grid">
              <div className="option-card">💰 High Salary</div>
              <div className="option-card">🏆 Respect</div>
              <div className="option-card">❤️ Follow Passion </div>
              
            </div>
          </div>

          {/* Question 2 */}
          <div className="question-block">
            <h3>
              How long can you study? / आप कितने समय तक पढ़ सकते हैं?
              <span>*</span>
            </h3>

            <div className="option-grid">
              <div className="option-card">🎓 10+ Years (Medical / Research)</div>
              <div className="option-card">📘 5-7 Years (Engineering / MBA)</div>
              <div className="option-card">💼 Want Job Soon (Diploma / ITI)</div>
              <div className="option-card">🎓 2-3 years</div>
              <div className="option-card">📘 3-5 Years </div>
              <div className="option-card">💼 5+ years</div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="question-block">
            <h3>
              Preferred Sector / आप किस प्रकार का करियर चाहते है 
              <span>*</span>
            </h3>

            <div className="option-grid">
              <div className="option-card">🏢 Private Sector</div>
              <div className="option-card">🏛 Government</div>
              <div className="option-card">🚀 Business / Startup</div>
              <div className="option-card">💻 Freelancing</div>
              <div className="option-card">💻 Note Sure</div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="question-block">
            <h3>
             आपकी इनकम  एक्सपेक्टेशन क्या है ?
              <span>*</span>
            </h3>

            <div className="option-grid">
              <div className="option-card">🏢Basic</div>
              <div className="option-card">🏛 Medium</div>
              <div className="option-card">High Income</div>
              <div className="option-card">💻 Luxury Lifestyle</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="button-row">
            <button className="prev" onClick={()=>{navigate("/personality")}}>Previous</button>
            <button className="next" onClick={()=>(navigate("/result"))}>Get Results</button>
          </div>

        </div>
      </div>
    </>
  );
};

export default CareerExpectation;
