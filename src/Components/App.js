import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import MusicAppContainer from "./MusicAppContainer.jsx";
const pathname = window.location.pathname


function App() {
  return (
    <Router>
      <MusicAppContainer path={pathname}/>
    </Router>
  );
}

export default App;
