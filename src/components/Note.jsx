import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useRef } from "react";
import NoteColor from "./NoteColor";

export default function Note(props) {
	const titleh1 = useRef();
	const para = useRef();
	const saveButton = useRef();

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

	function editNote(e) {
		console.log(e.currentTarget);
		if (e.currentTarget.children[0].id === "headingText") {
			const headline = e.currentTarget;

			headline.innerHTML = `
    <input class='note-input' style="font-size: 32px; width: fit-content; outline: none; border: none" type="text" value="${props.title}" />
    `;

			console.log(e.currentTarget.children[0].value);
			e.currentTarget.children[0].value = "";
			e.currentTarget.children[0].focus();
			e.currentTarget.children[0].value = props.title;
		}

		if (e.currentTarget.children[0].id === "paraText") {
			const para = e.currentTarget;

			para.innerHTML = `
    <textarea class='note-input' style="font-size: 16px;  outline: none; border: none; overflow: auto; height: fit-content; width: fit-content; resize: none" type="text" value="${props.message}" />
    `;

			console.log(e.currentTarget.children[0].value);
			e.currentTarget.children[0].value = "";
			e.currentTarget.children[0].focus();
			e.currentTarget.children[0].value = props.message;
		}

		saveButton.current.classList.add("show-save-edit");
		saveButton.current.classList.remove("save-edit");
	}

	// function replaceNewEdit(e) {
	// 	console.log(e.target);
	// }

	return (
		<>
			<div id={props.id} style={noteColors} className="note-wrapper">
				<NoteColor objectValue={props.objectValue} setObjectValue={props.setObjectValue} />
				<button
					className="note-exit"
					onClick={(e) => {
						let uniqueKey = Number(e.target.parentNode.id);
						deleteArrayValue(uniqueKey);
					}}
				></button>
				<div
					onClick={(e) => {
						editNote(e);
					}}
				>
					<h1 ref={titleh1} id="headingText" style={titleColor} className="note-title">
						{props.title}
					</h1>
				</div>

				<div
					onClick={(e) => {
						editNote(e);
					}}
					className="note-message"
				>
					<p ref={para} id="paraText">
						{props.message}
					</p>
				</div>
				<button ref={saveButton} className="save-edit">
					save
				</button>
			</div>
		</>
	);
}
