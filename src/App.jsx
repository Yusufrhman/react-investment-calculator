import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(newValue, inputId) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputId]: +newValue };
    });
  }
  const inputIsValid = userInput.duration > 0;
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput}></UserInput>
      {inputIsValid ? <Results userInput={userInput}></Results> : <p className="center">Please enter a duration &gt; 0</p>}
    </>
  );
}

export default App;
