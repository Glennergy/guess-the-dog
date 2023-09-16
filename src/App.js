import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  return (
    <>
      <Header score={score} />
      <Main score={score} setScore={setScore} />
    </>
  );
}

export default App;
