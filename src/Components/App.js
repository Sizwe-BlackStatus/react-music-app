import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import MusicAppContainer from "./MusicAppContainer.jsx";

function App() {
  return (
    <Router>
      <MusicAppContainer />
    </Router>
  );
}

export default App;
