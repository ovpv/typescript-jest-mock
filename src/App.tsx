import React, { useState } from "react";
import "./styles.css";
import moment from "moment";

export default function App() {
  const [date, setDate] = useState("");
  const [age, setAge] = useState(0);
  const calculateAge = () => {
    console.log('diff called');
    const calcAge = moment().diff(date, "years");
    setAge(calcAge);
  };
  return (
    <div className="App">
      <h2>How old are you?</h2>
      <label>Birthday: </label>
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        id="birthday"
        name="birthday"
      />
      <button disabled={!date.length} onClick={calculateAge}>
        Calculate Age
      </button>
      <div>Your age is: {age}</div>
    </div>
  );
}
