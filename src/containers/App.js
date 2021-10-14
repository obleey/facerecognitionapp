import "./App.css";
import Logo from "../components/Logo/Logo";
import Navigation from "../components/Navigation/Navigation";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Rank from "../components/Rank/Rank";
import "tachyons";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
