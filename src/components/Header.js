import React from "react";
import Photo from "../assets/photo.jpg";
import MailLogo from "../assets/MailLogo";

export default function Header() {
  return (
    <header className="container__item" >
      <img 
        className="header__photo"
        width="300px"
        src={Photo}
        alt="Me smiling with a green shirt"
      />
        <h1 className="header__name">Kévin Jayat</h1>
        <h2 className="header__title">Frontend Developer</h2>
        <button className="header__button">
        <MailLogo />
          Email
        </button>
    </header>
  );
}
