import dashboardImg from "./assets/dashboard.png";
import {useNavigate} from "react-router-dom";



const Skill = () => {
  const navigate= useNavigate();
  return (
    <>
    <div className="top-bar">
            <img src={dashboardImg} alt="Dashboard Logo" className="dashboard-img" />
            <h2>CareerCompass</h2>
            <span>Career Questionnaire</span>
          </div>
          <div className="progress-section">
        <p>Section 3 of 5</p>
        <div className="progress-bar">
          <div className="progress-fill2" />
        </div>
        <span className="percent">60% Completed</span>
      </div>
    <div className="skill-page">

      {/* Header */}
      <div className="skill-header">
        <div className="skill-icon">✨</div>
        <h2>Skills & Abilities</h2>
        <h4>कौशल और क्षमताएं</h4>
        <p>What are you good at? / आप किसमें अच्छे हैं?</p>
      </div>

      {/* Strengths */}
      <div className="skill-section">
        <h3>
          Your Strengths / आपकी ताकत <span>*</span>
        </h3>
        <p className="hint">
          Select all that describe you / जो आपका वर्णन करते हैं सभी को चुनें
        </p>

        <div className="skill-grid">
          <div className="skill-card">🧠 Logical Thinking</div>
          <div className="skill-card">💬 Communication/Leadership</div>
          <div className="skill-card">🎨 Creativity</div>
          <div className="skill-card">📊 memorization and understanding biology</div>
        </div>
      </div>

      {/* Public Speaking */}
      <div className="skill-section">
        <h3>
         group work me tumara main role kya hota h ? <span>*</span>
        </h3>

        <div className="skill-grid small">
          <div className="skill-card">😍 Problem Solving</div>
          <div className="skill-card">😨 Supporter</div>
          <div className="skill-card">😞 leader</div>
          <div className="skill-card">😞 Idea Creator </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="skill-buttons">
        <button className="btn prev" onClick={()=>{navigate("/intrest")}}>Previous</button>
        <button className="btn next" onClick={()=>{navigate("/personality")}} >Next</button>
      </div>

    </div>
    </>
  );
};

export default Skill;
