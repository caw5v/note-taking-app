import React from "react";

export default function AddNoteButton(props) {
  return (
    <button
      ref={props.addNote}
      id="post-button"
      className="add-note-transition "
      onClick={(e) => {
        e.preventDefault();
        props.formFunction();

        props.addNote.current.classList.add(props.inputContainer.current.classList[0] === "input-container-open" ? "clicked" : "clicked-compressed-button");

        setTimeout(() => {
          props.addNote.current.classList.remove(props.addNote.current.classList[1] === "clicked" ? "clicked" : "clicked-compressed-button");
        }, 100);
      }}
    >
      +
    </button>
  );
}
