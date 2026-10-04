import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Internships from "./pages/Internships";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import ApplicationStatus from "./pages/ApplicationStatus";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [studentData, setStudentData] = useState(null);
  return (
    <BrowserRouter>
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internships" element={<Internships />} />
          <Route
  path="/registration"
  element={
    <Registration
      studentData={studentData}
      setStudentData={setStudentData}
    />
  }
/>
<Route
  path="/profile"
  element={<Profile studentData={studentData} />}
 />
  <Route
  path="/application-status"
  element={<ApplicationStatus studentData={studentData} />}
/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;