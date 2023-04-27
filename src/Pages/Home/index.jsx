import React, { useState, useRef } from "react";
import Sliders from "../../Components/Slider";
import Smartdevice from "./../Smartdevice/index.jsx";
import Securitydevices from "../Securitydevices";
import "./style.css";
import Officeequipment from "../Officeequipment";

const Home = () => {
  return (
    <div className="container">
      <div>
        <Sliders />
        <div className="main">
          <Smartdevice />
          <Securitydevices/>
          <Officeequipment/>
        </div>
      </div>
    </div>
  );
};
export default Home;
