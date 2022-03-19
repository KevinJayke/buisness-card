import React from "react";
import Logo from "../assets/Logo";
import {logosData} from "../data/logosData";

export default function Footer() {
  const LogoElements = logosData.map(function (element, index) {
    return <Logo 
    key={index}
    link={element.link} 
    shape={element.shape} />;
  });
  console.log(LogoElements);
  return <footer className="footer">{LogoElements}</footer>;

}
