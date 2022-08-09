import React, { useRef } from "react";

let newArray = null;
let targetColor = null;
let targetId = null;
let targetBorder = null;
let targetElement = null;
let colorOfSelector = null;

export default function NoteColor(props) {
	const colorSelector = useRef();

	function updateArrayConditional() {
		if (props.objectValue) {
			props.objectValue.map((object, index) => {
				if (object.id === targetId) {
					newArray = props.objectValue;
					newArray[index].color = targetColor;
					newArray[index].text = targetColor === "white" ? "#34495e" : "white";
					newArray[index].border = targetBorder;
					props.setObjectValue(newArray);
				}
			});
		}
	}

	function colorFunction() {
		textNote();
		textHeader();
		borderColor();
	}

	function desktopColors(e) {
		let classOne = e.currentTarget.classList[1];

		if (e.currentTarget.parentElement.parentElement.id === "header-popup-div-one") {
			switch (classOne) {
				case "color-first":
					props.completeHeader.current.style.backgroundColor = colorOfSelector;
					colorSelector.current.parentElement.style.backgroundColor = "white";
					break;
				case "color-second":
					props.completeHeader.current.style.backgroundColor = colorOfSelector;
					colorSelector.current.parentElement.style.backgroundColor = "white";
					break;
				case "color-third":
					props.completeHeader.current.style.backgroundColor = colorOfSelector;
					colorSelector.current.parentElement.style.backgroundColor = "white";
					break;
				case "color-fourth":
					props.completeHeader.current.style.backgroundColor = colorOfSelector;
					colorSelector.current.parentElement.style.backgroundColor = "white";
					break;
				case "color-sixth":
					props.completeHeader.current.style.backgroundColor = colorOfSelector;
					colorSelector.current.parentElement.style.backgroundColor = "white";
					break;
				case "color-seventh":
					props.completeHeader.current.style.backgroundColor = colorOfSelector;
					colorSelector.current.parentElement.style.backgroundColor = "white";
					break;

				default:
					return null;
			}
		}

		if (e.currentTarget.parentElement.parentElement.classList[0] === "body-color-change-div") {
			console.log(props.noteContainer);
			switch (classOne) {
				case "color-first":
					props.noteContainer.current.style.backgroundColor = colorOfSelector;
					colorSelector.current.parentElement.style.backgroundColor = "white";
					break;
				case "color-second":
					props.noteContainer.current.style.backgroundColor = colorOfSelector;
					colorSelector.current.parentElement.style.backgroundColor = "white";
					break;
				case "color-third":
					props.noteContainer.current.style.backgroundColor = colorOfSelector;
					colorSelector.current.parentElement.style.backgroundColor = "white";
					break;
				case "color-fourth":
					props.noteContainer.current.style.backgroundColor = colorOfSelector;
					colorSelector.current.parentElement.style.backgroundColor = "white";
					break;
				case "color-sixth":
					props.noteContainer.current.style.backgroundColor = colorOfSelector;
					colorSelector.current.parentElement.style.backgroundColor = "white";
					break;
				case "color-seventh":
					props.noteContainer.current.style.backgroundColor = colorOfSelector;
					colorSelector.current.parentElement.style.backgroundColor = "white";
					break;

				default:
					return null;
			}
		}
	}

	function textNote() {
		if (targetElement.className === "note-wrapper" && targetElement.style.backgroundColor !== "white") {
			targetElement.style.color = "white";
		} else if (targetElement.className === "note-wrapper" && targetElement.style.backgroundColor === "white") {
			targetElement.style.color = "#34495e";
		}
	}

	function borderColor() {
		if (targetElement.className === "note-wrapper" && targetElement.style.backgroundColor === "rgb(241, 196, 15)") {
			console.log(targetElement.style.backgroundColor);
			targetElement.children[2].style.borderBottom = `2px solid ${targetBorder}`;
		} else if (targetElement.className === "note-wrapper" && targetElement.style.backgroundColor !== "rgb(241, 196, 15)") {
			console.log(targetElement.style.backgroundColor);
			targetElement.children[2].style.borderBottom = "2px solid #f1c40f";
		}
	}

	function textHeader() {
		let colorChange = targetColor !== "white" ? (targetElement.children[0].style = "color: white") : (targetElement.children[0].style.color = "purple");
		return colorChange;
	}

	return (
		<>
			<div ref={colorSelector} className="color-selector-div">
				<div
					onClick={(e) => {
						// #e74c3c red
						colorOfSelector = " #e74c3c";
						console.log(e.currentTarget.classList[1]);
						e.target.parentElement.parentElement.style.backgroundColor = colorOfSelector;
						targetElement = e.target.parentElement.parentElement;
						targetColor = e.target.parentElement.parentElement.style.backgroundColor;
						targetId = Number(e.target.parentElement.parentElement.id);
						targetBorder = "#f1c40f";

						desktopColors(e);
						updateArrayConditional();
						colorFunction();
					}}
					id="color-one"
					className="color color-first"
				></div>
				<div
					onClick={(e) => {
						// #2ecc71 green
						colorOfSelector = " #2ecc71";
						e.target.parentElement.parentElement.style.backgroundColor = colorOfSelector;
						targetElement = e.target.parentElement.parentElement;
						targetColor = e.target.parentElement.parentElement.style.backgroundColor;
						targetId = Number(e.target.parentElement.parentElement.id);
						targetBorder = "#f1c40f";

						desktopColors(e);
						updateArrayConditional();
						colorFunction();
					}}
					id="color-two"
					className="color color-second"
				></div>
				<div
					onClick={(e) => {
						//#f1c40f yellow
						colorOfSelector = " #f1c40f";
						e.target.parentElement.parentElement.style.backgroundColor = colorOfSelector;
						targetElement = e.target.parentElement.parentElement;
						targetColor = e.target.parentElement.parentElement.style.backgroundColor;
						targetId = Number(e.target.parentElement.parentElement.id);
						targetBorder = "#34495e";

						desktopColors(e);
						updateArrayConditional();
						colorFunction();
					}}
					id="color-three"
					className="color color-third"
				></div>
				<div
					onClick={(e) => {
						// white
						colorOfSelector = " white";
						e.target.parentElement.parentElement.style.backgroundColor = colorOfSelector;
						targetElement = e.target.parentElement.parentElement;
						targetColor = e.target.parentElement.parentElement.style.backgroundColor;
						targetId = Number(e.target.parentElement.parentElement.id);
						targetBorder = "#f1c40f";

						desktopColors(e);
						updateArrayConditional();
						colorFunction();
					}}
					id="color-four"
					className="color color-fourth"
				></div>

				<div
					onClick={(e) => {
						// #8e44ad purple
						colorOfSelector = "#8e44ad";

						e.target.parentElement.parentElement.style.backgroundColor = colorOfSelector;
						targetElement = e.target.parentElement.parentElement;
						targetColor = e.target.parentElement.parentElement.style.backgroundColor;
						targetId = Number(e.target.parentElement.parentElement.id);
						targetBorder = "#f1c40f";

						desktopColors(e);
						updateArrayConditional();
						colorFunction();
					}}
					id="color-six"
					className="color color-sixth"
				></div>
				<div
					onClick={(e) => {
						// #34495e blue
						colorOfSelector = "#34495e";
						console.log(e.currentTarget.classList[1]);
						e.target.parentElement.parentElement.style.backgroundColor = colorOfSelector;
						targetElement = e.target.parentElement.parentElement;
						targetColor = e.target.parentElement.parentElement.style.backgroundColor;
						targetId = Number(e.target.parentElement.parentElement.id);
						targetBorder = "#f1c40f";

						desktopColors(e);
						updateArrayConditional();
						colorFunction();
					}}
					id="color-seventh"
					className="color color-seventh"
				></div>
			</div>
		</>
	);
}
