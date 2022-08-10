import React, { useState, useRef } from "react";
import Note from "./Note";
import CompositionComponent from "./CompositionComponent";
import Header from "./Header";
import Footer from "./Footer";

let num = Math.random();
let key = 1;

export default function App() {
	const [titleInput, setTitleInput] = useState("");
	const [messageInput, setMessageInput] = useState("");
	const [objectValue, setObjectValue] = useState([]);

	const inputContainer = useRef();
	const noteContainer = useRef();
	const blankNoteAlert = useRef();
	const compColorDiv = useRef();
	const headerColorDiv = useRef();
	const completeHeader = useRef();

	let spectrum = null;
	let textSpectrum = null;
	let borderSpectrum = null;

	//##########Pushing object of inputs to array
	// iterator for note id (for identifying removal on array)

	function createNoteObject() {
		if (titleInput === "" && messageInput === "") {
			blankNoteAlert.current.classList.add("hidden-blank");
			blankNoteAlert.current.classList.remove("blank-div");
			setTimeout(() => {
				blankNoteAlert.current.classList.remove("hidden-blank");
				blankNoteAlert.current.classList.add("blank-div");
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

	function openColorDiv(e) {
		switch (e.target.parentElement.classList[0]) {
			case "composition-hamburger":
				let toggle = compColorDiv.current.style.display === "flex" ? (compColorDiv.current.style.display = "none") : (compColorDiv.current.style.display = "flex");
				return toggle;
				break;
			case "header-hamburger":
				if (headerColorDiv.current.classList.contains("header-color-selector-container")) {
					headerColorDiv.current.classList.add("grow-horizontal");
					headerColorDiv.current.classList.remove("header-color-selector-container");
				} else {
					headerColorDiv.current.classList.add("header-color-selector-container");
					headerColorDiv.current.classList.remove("grow-horizontal");
				}
				break;
			default:
				return null;
		}
	}

	return (
		<>
			<main className="outermost-container">
				<Header noteContainer={noteContainer} completeHeader={completeHeader} openColorDiv={openColorDiv} headerColorDiv={headerColorDiv} />
				{/* ################# BLANK NOTE ALERT */}
				<div ref={blankNoteAlert} id="empty" className="blank-div">
					<h1>A note cannot be blank. 😉 </h1>
				</div>
				{/* ############### FORM*/}
				<div className="input-position-container">
					<div ref={inputContainer} className="input-container">
						<CompositionComponent openColorDiv={openColorDiv} compColorDiv={compColorDiv} noteContainer={noteContainer} inputContainer={inputContainer} objectValue={objectValue} setObjectValue={setObjectValue} formFunction={formFunction} titleInput={titleInput} setTitleInput={setTitleInput} messageInput={messageInput} setMessageInput={setMessageInput} />
					</div>
				</div>

				{/* ############### NOTE */}
				<div ref={noteContainer} className="note-container">
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
// create ref for any imperative DOM manipulation
// and the body, into 3 dots that open a dropdown menu
// change color selector for composition component, header component,
// change color of airhead when color change from header color selection popup

// whats to be done

// make notes editable
/* attach event listener to the divs surrounding h1 and p. 
call a function to change the to elements into input fields 
create a save button to retain changes. the save button will 
update the objectValue array */
