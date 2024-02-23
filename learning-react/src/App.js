// import Gallery from "./Components/FirstComponent";
// import VariableInJsx from "./Components/Curly";
// import Age from "./Components/Age";
// import List from "./Components/List";
// import Numbers from "./Components/Numbers";
import UserInput from "./Components/UserInput";
import State from "./Components/State";
import "./Screens/Assets/style.css";

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

function App() {
  return (
    <div className="App">
      <center>
        {/* <Numbers /> */}
        <State></State>
        {/* <UserInput /> */}
      </center>
    </div>
  );
}

export default App;
