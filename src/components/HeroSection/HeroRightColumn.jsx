import React from "react";
import Social from "../Social/Social";
import Circle from "./Shapes/Circle";
import DotsGroup from "./Shapes/DotsGroup";
import HalfCircle from "./Shapes/HalfCircle";
import QuarterCircle from "./Shapes/QuarterCircle";
import Star from "./Shapes/Star";

const HeroRightColumn = () => {
  return (
    <div className="hero-right-column">
      <DotsGroup />
      <QuarterCircle />
      <Circle />
      <Star />
      <HalfCircle />
      <h1 className="heading">
        A new Perspective <br />
        of Business Delivery
      </h1>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <button>More Info</button>
      <Social />
    </div>
  );
};

export default HeroRightColumn;
