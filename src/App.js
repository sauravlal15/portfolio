import "./App.css";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Dashboard />
      <About />
      <Skills />
      <Education />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
