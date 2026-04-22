import dashboardImg from "./assets/dashboard.png";

const Result = () => {
  const results = [
    {
      title: "Data Scientist",
      desc: "Analyze complex data to solve problems",
      score: 92,
    },
    {
      title: "Full Stack Developer",
      desc: "Build complete web applications",
      score: 88,
    },
    {
      title: "Machine Learning Engineer",
      desc: "Create AI-powered solutions",
      score: 85,
    },
    {
      title: "Digital Marketing Specialist",
      desc: "Drive online marketing strategies",
      score: 75,
    },
  ];

  return (
    <>
      <div className="top-bar">
        <img
          src={dashboardImg}
          alt="Dashboard Logo"
          className="dashboard-img"
        />
        <h2>Career Compass</h2>
        <span>Career Questionnaire</span>
      </div>

      <div className="justify-center text-center relative top-3 ">
        <p>✨ AI-POWERED CAREER RESULTS</p>
        <h1 className="font-bold text-2xl relative top-2">
          Your Personalized Career Path
        </h1>
        <p className="font-sans relative top-4  ">
          Based on your profile AI recommends these top career paths tailored
          just for you.
        </p>
      </div>
         

<div className="flex justify-center ">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8    w-3/4  relative top-10 max-w-5xl">
    {results.map((result, index) => (
      <div
        key={index}
        className="border-white rounded-lg shadow-md bg-white  h-full p-6 text-center "
      >
        <h3 className="font-bold text-lg relative ">{result.title}</h3>
        <p className="text-sm mt-2">{result.desc}</p>
        <div className="progress">
          <span className="block  font-medium relative bottom-2 left-40">
           {result.score}%
        </span>
        </div>
        
        
        
     
        
      </div>
    ))}
    
  </div>

  
      
</div>


    </>
  );
};

export default Result;
