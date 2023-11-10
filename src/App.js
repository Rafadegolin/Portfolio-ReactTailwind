import Contato from "./components/Contato";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Sobre from "./components/Sobre";
import Trabalho from "./components/Trabalho";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Sobre />
      <Skills />
      <Trabalho />
      <Contato />
    </div>
  );
}

export default App;
