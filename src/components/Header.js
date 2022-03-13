import React from "react";
import Photo from "../assets/photo.jpg";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__photo"
        src={Photo}
        alt="Me smiling with a green shirt"
        title="Kévin Jayat"
      />
    </header>
  );
}
