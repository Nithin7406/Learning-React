import Gallery from "./Components/FirstComponent";
import VariableInJsx from "./Components/Curly";

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
      <Gallery />
      <VariableInJsx person={person} name={"kanaka"} />
    </div>
  );
}

export default App;
