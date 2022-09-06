import './App.scss';
import { Header } from "./components/header";
import { memo, useState } from "react";
import { InitialScreen } from "./components/screens/InitialScreen";
import { Screens } from "./components/constants/screens";
import { SketchLibraryScreen } from "./components/screens/SketchLibraryScreen";

export const App = () => {
  const [screen, setScreen] = useState(Screens.Initial)
  const [measurement, setMeasurement] = useState("in")
  const [parameter1, setParameter1] = useState(0)
  const [parameter2, setParameter2] = useState(0)

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
      <CurrentScreen screen={screen} setScreen={setScreen} />
    </div>
  )
}

const CurrentScreen = memo(({screen, setScreen}) => {
  switch (screen) {
    case Screens.Initial:
      return <InitialScreen setScreen={setScreen}/>
    case Screens.SketchLibrary:
      return <SketchLibraryScreen/>
    default:
      return <InitialScreen setScreen={setScreen}/>
  }
})

export default App;
