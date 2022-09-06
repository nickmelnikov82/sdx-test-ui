import './App.scss';
import { Header } from "./components/header";
import { useState } from "react";

function App() {
  const [measurement, setMeasurement] = useState("in")
  const [parameter1, setParameter1] = useState()
  const [parameter2, setParameter2] = useState()

  return (
    <div className="app">
      <Header
        measurement={measurement}
        setMeasurement={setMeasurement}
        parameter1={parameter1}
        setParameter1={setParameter1}
        parameter2={parameter2}
        setParameter2={setParameter2}
      />
    </div>
  );
}

export default App;
