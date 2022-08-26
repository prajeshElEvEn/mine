import About from './components/About';
import Build from './components/Build';
import Footer from './components/Footer';
import Home from './components/Home';
import Know from './components/Know';
import Navbar from './components/Navbar';
import Use from './components/Use';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Know />
      <Use />
      <Build />
      <Footer />
    </div>
  );
}

export default App;
