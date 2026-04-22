import React from "react";
import {useNavigate} from "react-router-dom";
import dashboardImg from "./assets/dashboard.png";


const Intrest = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="margin">
    <div  className="academic-wrapper">
    <div className="top-bar">
                <img src={dashboardImg} alt="Dashboard Logo" className="dashboard-img" />
                <h2>Career Compass</h2>
                <span>Career Questionnaire</span>
              </div>
              <div className="progress-section">
        <p>Section 2 of 5</p>
        <div className="progress-bar">
          <div className="progress-fill1" />
        </div>
        <span className="percent">40% Completed</span>
      </div>
    <div className="intrest-container">
        
        

      {/* Header */}
      <div className="intrest-header">
        
        <div className="icon-box">💚</div>
        <h2>Interest & Passion</h2>
        <p className="subtitle">
          What drives you? / आपको क्या प्रेरित करता है?
        </p>
      </div>

      {/* Question 1 */}
      <div className="question-block">
        <h3>
          What type of work excites you? / किस प्रकार का काम आपको उत्साहित करता है?
          <span>*</span>
        </h3>

        <div className="option-grid">
          <div className="option-card">🧩 Problem Solving / समस्या समाधान</div>
          <div className="option-card">🎨 Creativity / रचनात्मकता</div>
          <div className="option-card">🤝 Helping People / लोगों की मदद</div>
          <div className="option-card">💼 Business / व्यवसाय</div>
          <div className="option-card">💻 Technology / प्रौद्योगिकी</div>
          <div className="option-card">🏛 Government Services / सरकारी सेवा</div>
        </div>
      </div>

      {/* Question 2 */}
      <div className="question-block">
        <h3>
          What do you enjoy in free time? / खाली समय में क्या करना पसंद है?
          <span>*</span>
        </h3>
        <p className="hint">
          Select all that apply / सभी लागू विकल्प चुनें
        </p>

        <div className="option-grid">
          <div className="option-card">📱 Mobile / Computer</div>
          <div className="option-card">✏ Drawing</div>
          <div className="option-card">📚 Reading</div>
          <div className="option-card">⚽ Sports</div>
          <div className="option-card">🗣 Talking / Guiding</div>
          <div className="option-card">🔧 DIY</div>
        </div>
      </div>

      {/* Buttons */}
      <div className="button-row">
        <button className="prev" onClick={()=>{navigate("/academic")}}>Previous</button>
        <button className="next" onClick={()=>{navigate("/skill")}} >Next</button>
      </div>

    </div>
    </div>
    </div>
    </>
  );
};

export default Intrest;
