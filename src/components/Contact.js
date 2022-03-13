import React from "react";
import MailLogo from "../assets/MailLogo";

export default function Contact() {
  return (
    <section className="contact">
      <h1 className="contact__name">Kévin Jayat</h1>
      <h2 className="contact__title">Développeur Front End </h2>
      <button className="contact__button">
        <MailLogo />
        Email
      </button>
    </section>
  );
}
