import React from "react";
import Photo from "../assets/photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <img
        className="header__photo"
        width="300px"
        src={Photo}
        alt="Me smiling with a green shirt"
      />
      <h1 className="header__name">Kévin Jayat</h1>
      <h2 className="header__title">Frontend Developer</h2>
      <button className="header__button">
        <FontAwesomeIcon className="header__button-icon" icon={faPaperPlane} />
        Email
      </button>
    </header>
  );
}
