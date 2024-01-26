import "./App.css";
import Animation1 from "./pages/Animation1";
import AnimationHooks from "./pages/AnimationHooks";
import AnimationVariant from "./pages/AnimationVariant";
import Gesture from "./pages/Gesture";
import KeyFrame from "./pages/KeyFrame";

function App() {
  return (
    <div className="main">
      {/* <Animation1></Animation1> */}
      {/* <AnimationVariant></AnimationVariant> */}
      {/* <Gesture></Gesture> */}
      <KeyFrame></KeyFrame>
      <AnimationHooks></AnimationHooks>
    </div>
  );
}

export default App;
