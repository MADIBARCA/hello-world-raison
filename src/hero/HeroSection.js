import Contacts from "./contacts/Contacts";

import "./HeroSection.css";

import WorldMapImg from "assets/hero/world-map.png";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <h1>Hello World</h1>
      <p>Always ready to meet with you.</p>

      <div className="heroSectionMain">
        <img src={WorldMapImg} alt="background-img" className="heroSectionBackgroundImg"/>

        <div className="heroSectionContacts">
          <Contacts/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
