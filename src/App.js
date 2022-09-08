import './App.scss';
import { Header } from "./components/header";
import { memo, useState } from "react";
import { InitialScreen } from "./components/screens/InitialScreen";
import { Screens } from "./components/constants/screens";
import { SketchLibraryScreen } from "./components/screens/SketchLibraryScreen";
import { MainScreen } from "./components/screens/MainScreen";

export const App = () => {
  const [screen, setScreen] = useState(Screens.Initial)
  const [image, setImage] = useState()
  const [measurement, setMeasurement] = useState("in")
  const [parameter1, setParameter1] = useState(0)
  const [parameter2, setParameter2] = useState(0)

  const chooseImage = (image) => {
    setImage(image)
    setScreen(Screens.Main)
  }

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
      <CurrentScreen
        screen={screen}
        setScreen={setScreen}
        chooseImage={chooseImage}
        image={image}
        property1={parameter1}
        property2={parameter2}
      />
    </div>
  )
}

const CurrentScreen = memo(({screen, setScreen, chooseImage, image, property1, property2}) => {
  switch (screen) {
    case Screens.Initial:
      return <InitialScreen setScreen={setScreen}/>
    case Screens.SketchLibrary:
      return <SketchLibraryScreen chooseImage={chooseImage}/>
    case Screens.Main:
      return <MainScreen image={image} property1={property1} property2={property2} />
    default:
      return <InitialScreen setScreen={setScreen}/>
  }
})

export default App;
