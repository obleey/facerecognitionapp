import "./App.css";
import Logo from "../components/Logo/Logo";
import Navigation from "../components/Navigation/Navigation";
import "tachyons";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
    </div>
  );
}

export default App;
