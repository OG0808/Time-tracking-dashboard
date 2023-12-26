import { useState } from "react";
import "./App.css";
import { Cards } from "./components/Cards";
import { Profile } from "./components/Profile";

function App() {
  const [timeframe, setTimeFrame] = useState({
    weekly: "",
    monthly: "",
    daily: "",
  });


  return (
    <div className="container__principal">
      <div className="container__components">
      <Profile setTimeFrame={setTimeFrame} 
      timeframe={timeframe}/>
      <Cards timeframe={timeframe} />
      </div>
    </div>
  );
}

export default App;
