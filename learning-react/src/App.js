import Gallery from "./Components/FirstComponent";
import VariableInJsx from "./Components/Curly";
import Age from "./Components/Age";
import List from "./Components/List";
import Numbers from "./Components/Numbers";

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
        <Numbers />
      </center>
    </div>
  );
}

export default App;
