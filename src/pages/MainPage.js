import React from "react";
import "./MainPage.css";
import person from "../assets/person.png";
const MainPage = () => {
  return (
    <main className="main-page-header">
      <section className="main-page-right-section">
        <img src={person} className="person" />
      </section>
      <section className="main-page-left-section">
        <h1 className="header-main">A new Perspective of Business Delivery</h1>
        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
        <button>More Info</button>
      </section>
    </main>
  );
};

export default MainPage;
