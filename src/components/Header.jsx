import React from "react";
import NoteColor from "./NoteColor";

export default function Header() {
  return (
    <div className="header">
      <h1 id="top-title" className="title">
        Air<span className="italicize-span">Head</span>
      </h1>
      <NoteColor />
    </div>
  );
}
