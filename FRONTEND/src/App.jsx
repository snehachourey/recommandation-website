import { BrowserRouter, Routes, Route } from "react-router-dom";

import AcademicNew from "./AcademicNew";
import Intrest from "./Intrest";
import Skill from "./Skill";
import Personality from "./Personality";
import CareerExpectation from "./CareerExpectation";
import Landing from "./Landing";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Result from "./Result";
import CareerForm from "./CareerForm";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/academic" element={<AcademicNew />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/intrest" element={<Intrest />} />
        <Route path="/personality" element={<Personality />} />
        <Route path="/career-expectation" element={<CareerExpectation />} />
        <Route path="/result" element={<Result />} />
        <Route  element={<CareerForm />} />
        <Route element={<ToastContainer />}/>
    
      </Routes>
      </BrowserRouter>
  );
}

export default App;
