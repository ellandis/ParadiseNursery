import { useState } from "react"
import AboutUs from "./AboutUs"
import GreenHouse from "./GreenHouse";
import "./App.css";

function App() {
  const [showRoom, setShowRoom] = useState(false);

  const handleGetStarted = () => {
    setShowRoom(true);
  };

  return (
    <>
      <header className="first_page">
        <div className="main_event">
          <div className="first_page_name_btn">
            <h1 className="budget_heading">Pick your next plant now</h1>
            <p className="budget_sentence">
              Explore our wide variety of plants and gardening supplies to create your own green paradise.
            </p>
            <div className="getstarted_btn">
              <button
                onClick={() => handleGetStarted()}
                className="get-started-btn">
                Start Planting
              </button>
            </div>
          </div>
          <div className="aboutus_main">
            <AboutUs />
          </div>
        </div>
      </header>

      <div className={`event-list-container ${showRoom ? "visible" : ""}`}>
        <GreenHouse />
      </div>
    </>
  );
}

export default App;
