import React, { useRef } from "react";
import AddNoteButton from "./AddNoteButton";
import NoteColor from "./NoteColor";

export default function CompositionComponent(props) {
	const openDiv = useRef();
	const bodyTextArea = useRef();
	const addNote = useRef();

	function buttonStyleConditional() {
		if (document.querySelector(".maximize-style")) {
			openDiv.current.classList.add("minimize-style");
			openDiv.current.classList.remove("maximize-style");

			props.inputContainer.current.classList.add("input-container");
			props.inputContainer.current.classList.remove("input-container-open");

			props.noteContainer.current.style.paddingTop = "12rem";
			props.noteContainer.current.style.transition = "padding 0.18s cubic-bezier(0.56, 0.71, 0, 1)";

			bodyTextArea.current.classList.add("message-input-close");
			bodyTextArea.current.classList.remove("message-input");
			bodyTextArea.current.placeholder = "";

			addNote.current.classList.add("add-note-transition");
			addNote.current.classList.remove("add-note-button");
			addNote.current.innerText = "+";
		} else {
			openDiv.current.classList.add("maximize-style");
			openDiv.current.classList.remove("minimize-style");

			props.inputContainer.current.classList.add("input-container-open");
			props.inputContainer.current.classList.remove("input-container");

			props.noteContainer.current.style.paddingTop = "25rem";
			props.noteContainer.current.style.transition = "padding 0.18s cubic-bezier(0.56, 0.71, 0, 1)";

			bodyTextArea.current.classList.add("message-input");
			bodyTextArea.current.classList.remove("message-input-close");
			bodyTextArea.current.placeholder = "Message";

			addNote.current.classList.add("add-note-middle");
			setTimeout(() => {
				addNote.current.classList.remove("add-note-middle");
			}, 20);
			addNote.current.classList.add("add-note-button");
			addNote.current.classList.remove("add-note-transition");
			addNote.current.innerText = "Add";
		}
	}

	return (
		<>
			<div ref={props.compColorDiv} className="composition-color-selector-container">
				<NoteColor noteContainer={props.noteContainer} objectValue={props.objectValue} setObjectValue={props.setObjectValue} />
			</div>
			<div
				onClick={(e) => {
					props.openColorDiv(e);
				}}
				className="composition-hamburger hamburger-container"
			>
				<span className="hamburger-menu-divs"></span>
				<span className="hamburger-menu-divs"></span>
				<span className="hamburger-menu-divs"></span>
			</div>

			<div
				onClick={() => {
					buttonStyleConditional();
				}}
				className="expand-contract-button"
			>
				<div ref={openDiv} id="maximize-id" className="minimize-style"></div>
			</div>
			<form>
				{/* //################## INPUT TITLE */}
				<input
					className="title-input"
					value={props.titleInput}
					placeholder="Title"
					onChange={(e) => {
						let newTitleValue = e.target.value;
						props.setTitleInput(newTitleValue);
					}}
				></input>
				{/* //################## INPUT MESSAGE */}
				<textarea
					ref={bodyTextArea}
					className="message-input-close"
					value={props.messageInput}
					placeholder="Message"
					onChange={(e) => {
						let newMessageValue = e.target.value;
						props.setMessageInput(newMessageValue);
					}}
				></textarea>
				{/* //################## BUTTON */}
				<AddNoteButton inputContainer={props.inputContainer} addNote={addNote} objectValue={props.objectValue} setObjectValue={props.setObjectValue} formFunction={props.formFunction} />
			</form>
		</>
	);
}
