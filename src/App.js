import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/style.css";

function App() {
  return (
    <div className="app">
      <h1>CV Application</h1>

      <GeneralInfo />
      <Education />
      <Experience />
      
    </div>
  );
}

export default App;