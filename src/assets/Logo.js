import React from "react";

export default function Logo(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div className="logo">
        <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d={props.shape}
            fill="#1A1B21"
          />
        </svg>
      </div>
    </a>
  );
}
