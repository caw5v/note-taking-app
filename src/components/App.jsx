import React, { useState, useRef } from "react";
import Note from "./Note";
import CompositionComponent from "./CompositionComponent";
import Header from "./Header";
import Footer from "./Footer";
import NoteColor from "./NoteColor";

let num = Math.random();
let key = 1;

export default function App() {
  const [titleInput, setTitleInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [objectValue, setObjectValue] = useState([]);

  const inputContainer = useRef();
  const noteContainer = useRef();

  let spectrum = null;
  let textSpectrum = null;
  let borderSpectrum = null;

  //##########Pushing object of inputs to array
  // iterator for note id (for identifying removal on array)

  function createNoteObject() {
    if (titleInput === "" && messageInput === "") {
      document.getElementById("empty").classList.add("hidden-blank");
      document.getElementById("empty").classList.remove("blank-div");
      setTimeout(() => {
        document.getElementById("empty").classList.remove("hidden-blank");
        document.getElementById("empty").classList.add("blank-div");
      }, 2000);
    } else {
      setObjectValue((prevValue) => {
        return [...prevValue, { title: titleInput, message: messageInput, id: num, color: "white", text: "#34495e", border: "rgb(241, 196, 15)" }];
      });

      num++;
    }
  }

  function formFunction() {
    createNoteObject();
    setTitleInput("");
    setMessageInput("");
  }

  return (
    <>
      <main className="outermost-container">
        <Header />
        {/* ################# BLANK NOTE ALERT */}
        <div id="empty" className="blank-div">
          <h1>A note cannot be blank. 😉 </h1>
        </div>
        {/* ############### FORM*/}
        <div className="input-position-container">
          <div ref={inputContainer} className="input-container">
            <CompositionComponent noteContainer={noteContainer} inputContainer={inputContainer} objectValue={objectValue} setObjectValue={setObjectValue} formFunction={formFunction} titleInput={titleInput} setTitleInput={setTitleInput} messageInput={messageInput} setMessageInput={setMessageInput} />
          </div>
        </div>

        {/* ############### NOTE */}
        <div ref={noteContainer} className="note-container">
          <div className="body-hamburger hamburger-container">
            <span className="hamburger-menu-divs"></span>
            <span className="hamburger-menu-divs"></span>
            <span className="hamburger-menu-divs"></span>
          </div>
          <div className="body-color-selector-container">
            <NoteColor />
          </div>
          {objectValue.map((object) => {
            key++;

            spectrum = object.color;
            textSpectrum = object.text;
            borderSpectrum = object.border;
            return <Note key={key} borderSpectrum={object.border} textSpectrum={textSpectrum} spectrum={spectrum} objectValue={objectValue} setObjectValue={setObjectValue} title={object.title} message={object.message} id={object.id} />;
          })}
        </div>
        <Footer />
      </main>
    </>
  );
}

// Completed functionality
// controlled components
// created event handlers
// create object to hold input values
// pushed object to array
// compose note with array of objects
// map enter to note add
// map unique keys to component Note
// clear input after button is clicked and form is submitted
// create exit functionality for notes
// separate into components
// create color selector for notes
// create color selector for all appropriate components
// the map() should leave a signature on all previously rendered notes
// ----------------to allow for single note render instead of the entire array,
// ----------------thus giving color change ability on individual notes
// unbind enter from note application
// text color has to be stored in objectValue state
// create blue line for yellow cards
// title bottom-border has to be stored in objectValue state
// color selector for header and body
// create minify feature for the composition component
// make small add button for compressed input field
// adjust note container hold the notes relative to the composition component

// whats to be done
// change color selector for composition component, header component,
// and the body, into 3 dots that open a dropdown menu

// *reminder control color selector component in the note container by referencing from the note container
