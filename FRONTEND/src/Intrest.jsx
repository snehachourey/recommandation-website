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
         tum kese vedios dekhna pasand krte ho?
          <span>*</span>
        </h3>

        <div className="option-grid">
          <div className="option-card">🧩 Medical health </div>
          <div className="option-card">🎨 finance/buisness</div>
          <div className="option-card">💻 Technology/Science</div>
          <div className="option-card"> entertainment</div>
        </div>
      </div>

      {/* Question 2 */}
      <div className="question-block">
        <h3>
        tumhe kis type ka kam exciting lagata h ?
          <span>*</span>
        </h3>
        <p className="hint">
          Select all that apply / सभी लागू विकल्प चुनें
        </p>

        <div className="option-grid">
          <div className="option-card">📱 problem solving</div>
          <div className="option-card">helping people</div>
          <div className="option-card">📚 managing money</div>
          <div className="option-card">⚽ creative work</div>

        </div>
      </div>
      
      {/* Question 3 */}
      <div className="question-block">
        <h3>
        आपअपने फ्री टाइम में  क्या करना पसंद करते है ?
          <span>*</span>
        </h3>
        <p className="hint">
          Select all that apply / सभी लागू विकल्प चुनें
        </p>

        <div className="option-grid">
          <div className="option-card">📱 Reading / Learning</div>
          <div className="option-card">Gaming</div>
          <div className="option-card">📚 Waching videos</div>
          <div className="option-card">⚽ Drawing / Dsign</div>
          <div className="option-card">⚽ Talking / Socializing</div>

        </div>
      </div>
      {/* Question 4 */}
      <div className="question-block">
        <h3>
        आपको किस फील्ड में जिज्ञासा है?
          <span>*</span>
        </h3>
        <p className="hint">
          Select all that apply / सभी लागू विकल्प चुनें
        </p>

        <div className="option-grid">
          <div className="option-card">📱 Technology  Medical Health</div>
          <div className="option-card">Medical Health</div>
          <div className="option-card">📚Bussiness / Finance</div>
          <div className="option-card">⚽ Arts / Creativity</div>
          <div className="option-card">⚽ Government / Civil Services</div>

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
