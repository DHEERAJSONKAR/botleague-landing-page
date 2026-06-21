import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Competitions from "./components/Competitions";
import Journey from "./components/Journey";
import About from "./components/About";
import Categories from "./components/Categories";
import Disciplines from "./components/Disciplines";
import Benefits from "./components/Benefits";
import Ecosystem from "./components/Ecosystem";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-white">
      <Navbar />
      <main>
        <Hero />
        <Competitions />
        <Journey />
        <About />
        <Categories />
        <Disciplines />
        <Benefits />
        <Ecosystem />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}

export default App;
