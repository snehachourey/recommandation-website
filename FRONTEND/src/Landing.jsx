import { useNavigate } from "react-router-dom";
import dashboardImg from "./assets/dashboard.png";
const Landing = () => {
   const navigate = useNavigate();
   

  return (
    <>
    <div className="h-full w-full ">
      {/* ========== NAVBAR ========== */}
      <nav className="flex justify-between items-center 
            bg-white
             lg:py-3
            sm:px-6 sm:py-4
            md:px-10
            lg:px-20
            ">
        <img src={dashboardImg} alt="" className="dashboard-img" />
        <h2 className="text-2xl sm:none font-bold text-black font-serif">Career Recommendation For School Student</h2>
          
        <div className="pr-2.5">
          {/* Get Started हटाया */}
          
          <button className="bg-teal-500 py-1 text-white w-36 h-8 rounded-full border-none cursor-pointer font-semibold relative right-3" onClick={()=>{navigate("/login")}}>Login / Sign Up</button>
        </div>
        </nav>
      

      {/* ========== HERO SECTION ========== */}
      <section className="hero">
        <div className="hero-left">
          <h1 className="tagline">✨ AI-POWERED CAREER GUIDANCE</h1>

          <h1>
            Discover Your <br /> Perfect Career Path! ✨
          </h1>

          <p>
            AI-powered precise guidance based on your education, skills, and
            interests. Access your resources instantly and start your journey
            today.
          </p>

          {/* नीचे वाला section same रहेगा */}
          <div className="hero-buttons">
            <button className="btn-outline" onClick={()=>{navigate("/academic")}}>Get Started</button>
            
          </div>
        </div>

        <div className="hero-right">
          <img src="https://horizons-cdn.hostinger.com/ef312433-969c-41b6-9514-b24a844c6777/cbde9ba484da8308002d13e4ef69963d.jpg" alt="Career Dashboard" />
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>Enjoy your journey here</p>

        <div className="steps">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Create Profile</h3>
            <p>Share your academic background and interests</p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Get AI Recommendations</h3>
            <p>Receive personalized career suggestions</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Start Learning</h3>
            <p>Access curated courses and resources</p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Landing;
