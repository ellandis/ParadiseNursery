import { useState } from "react"

function App() {
  const [showRoom, setShowRoom] = useState(false);

  const handleGetStarted = () => {
    setShowRoom(true);
  };

  return (
    <>
    <header>
      <div>
      <h1>Welcome to Paradise Nursery</h1>
      <p>Where your plant journey begins!</p>
      <div>
        
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
      </div>
    </header>
    </>
  );
}

export default App;
