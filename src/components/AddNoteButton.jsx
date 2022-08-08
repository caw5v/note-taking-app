import React from "react";

export default function AddNoteButton(props) {
  // function findAttribute () {
  //   if (props.addNote.current.classList[1] === 'clicked') {
  //     return 'clicked'
  //   } else {
  //     return 'clicked'
  //   }
  // }

  return (
    <button
      ref={props.addNote}
      id="post-button"
      className="add-note-transition "
      onClick={(e) => {
        e.preventDefault();
        props.formFunction();

        props.addNote.current.classList.add(props.inputContainer.current.classList[0] === "input-container-open" ? "clicked" : "clicked-compressed-button");
        console.log(props.addNote.current.classList);
        setTimeout(() => {
          props.addNote.current.classList.remove(props.addNote.current.classList[1] === "clicked" ? "clicked" : "clicked-compressed-button");
        }, 100);
      }}
    >
      +
    </button>
  );
}
