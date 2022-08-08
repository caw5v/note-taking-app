import React from "react";
import NoteColor from "./NoteColor";

export default function Note(props) {
  const noteColors = {
    backgroundColor: props.spectrum,
    color: props.textSpectrum,
  };

  const titleColor = {
    borderBottom: `2px solid ${props.borderSpectrum}`,
  };

  function deleteArrayValue(id) {
    props.setObjectValue((prevValue) => {
      return prevValue.filter((item, index) => {
        return item.id !== id;
      });
    });
  }

  return (
    <>
      <div id={props.id} style={noteColors} className="note-wrapper">
        {/* {altColor()} */}
        <NoteColor objectValue={props.objectValue} setObjectValue={props.setObjectValue} />
        <button
          className="note-exit"
          onClick={(e) => {
            let uniqueKey = Number(e.target.parentNode.id);
            deleteArrayValue(uniqueKey);
          }}
        ></button>
        <h1 style={titleColor} className="note-title">
          {props.title}
        </h1>
        <div className="note-message">{props.message}</div>
      </div>
    </>
  );
}
