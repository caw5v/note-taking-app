import React, { useRef } from "react";
import NoteColor from "./NoteColor";

export default function Header(props) {
	const headDiv = useRef();
	const backgroundDiv = useRef();
	const title = useRef();

	function setClass(e) {
		switch (e.target.innerText) {
			case "Header Color":
				if (headDiv.current.classList.contains("open") !== true) {
					headDiv.current.classList.add("open");
					headDiv.current.classList.remove("header-color-change-div");
				} else {
					headDiv.current.classList.add("header-color-change-div");
					headDiv.current.classList.remove("open");
				}
				break;

			case "Background Color":
				if (backgroundDiv.current.classList.contains("open") !== true) {
					backgroundDiv.current.classList.add("open");
					backgroundDiv.current.classList.remove("background-color-change-div");
				} else {
					backgroundDiv.current.classList.add("background-color-change-div");
					backgroundDiv.current.classList.remove("open");
				}
				break;

			default:
				return null;
		}
	}

	return (
		<div ref={props.completeHeader} className="header">
			<div
				onClick={(e) => {
					props.openColorDiv(e);
				}}
				className="header-hamburger hamburger-container"
			>
				<span className="hamburger-menu-divs"></span>
				<span className="hamburger-menu-divs"></span>
				<span className="hamburger-menu-divs"></span>
			</div>
			<div ref={props.headerColorDiv} className="header-color-selector-container">
				<div
					onClick={(e) => {
						setClass(e);
					}}
					className="head-row"
				>
					<p className="head-color">Header Color</p>
				</div>
				<div ref={headDiv} id="header-popup-div-one" className="header-color-change-div">
					<NoteColor title={title} noteContainer={props.noteContainer} completeHeader={props.completeHeader} />
				</div>
				<div
					onClick={(e) => {
						setClass(e);
					}}
					className="background-row"
				>
					<p className="background-color">Background Color</p>
				</div>
				<div ref={backgroundDiv} className="body-color-change-div">
					<NoteColor title={title} noteContainer={props.noteContainer} completeHeader={props.completeHeader} />
				</div>
			</div>
			<h1 ref={title} id="top-title" className="title">
				Air<span className="italicize-span">Head</span>
			</h1>
		</div>
	);
}
