import React from "react";
import "./HeroSection.css";
import HeroRightColumn from "./HeroRightColumn";
import HeroLeftColumn from "./HeroLeftColumn";
const HeroSection = () => {
  return (
    <main className="hero-content">
      <HeroLeftColumn />
      <HeroRightColumn />
    </main>
  );
};

export default HeroSection;
