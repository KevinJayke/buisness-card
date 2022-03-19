import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <h1 className="contact__name">Kévin Jayat</h1>
      <h2 className="contact__title">Développeur Front End </h2>
      <a href="mailto: kevin.jayat@gmail.com">
        <button className="contact__button">
          <svg
            className="maillogo"
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="maillogo__path"
              d="M11.7474 9.68069L2.34947 3.80702V13.1486H21.1453V3.80702L23.4947 2.33858V15.596H0V0.911774H23.4947V2.33858L11.7474 9.68069ZM17.296 3.35914H6.1987L11.7474 6.82707L17.296 3.35914Z"
              fill="#2B283A"
            />
          </svg>
          Email
        </button>
      </a>
    </section>
  );
}
