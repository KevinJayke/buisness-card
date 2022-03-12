import React from "react";
import DrrribleLogo from "../assets/DrrribleLogo";
import GitHubLogo from "../assets/GitHubLogo";
import LinkedinLogo from "../assets/LinkedinLogo";


export default function Footer() {
  return (
    <footer className="container__item" >
        <DrrribleLogo />
        <GitHubLogo />
        <LinkedinLogo />
    </footer>
  );
}
