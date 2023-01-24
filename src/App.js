import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import FiveTriangles from "./components/HeroSection/Shapes/FiveTriangles";
import Lines from "./components/HeroSection/Shapes/Lines";
import ThreeDots from "./components/HeroSection/Shapes/ThreeDots";
import Triangles from "./components/HeroSection/Shapes/Triangles";
import XShape from "./components/HeroSection/Shapes/XShape";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="main-container">
      <section className="header-section">
        <div className="container">
          <Navbar />
          <HeroSection />
          <Triangles />
          <ThreeDots />
          <XShape />
          <Lines />
          <FiveTriangles />
        </div>
      </section>
    </div>
  );
}

export default App;
