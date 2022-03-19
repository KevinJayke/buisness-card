import React from "react";
import { aboutData } from "../data/aboutData";

export default function About() {
  const aboutMe = aboutData.map(function (info) {
    return (
      <article>
        <h3>{info.title}</h3>
        <p>{info.article}</p>
      </article>
    );
  });
  return <section className="about">{aboutMe}</section>;
}
