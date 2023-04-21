import './styles/sass/Main.css';

//Pages
import Home from "./pages/Home/Home";

//Components
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div>
      <Home />
      <Navbar />
    </div>
  );
}

export default App;
