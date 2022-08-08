import React from "react";
import NoteColor from "./NoteColor";

export default function Header() {
  return (
    <div className="header">
      <div className="header-hamburger hamburger-container">
        <span className="hamburger-menu-divs"></span>
        <span className="hamburger-menu-divs"></span>
        <span className="hamburger-menu-divs"></span>
      </div>
      <div className="header-color-selector-container">
        <NoteColor />
      </div>
      <h1 id="top-title" className="title">
        Air<span className="italicize-span">Head</span>
      </h1>
    </div>
  );
}
