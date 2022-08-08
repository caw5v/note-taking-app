import React, { useMemo } from "react";

let newArray = null;
let targetColor = null;
let targetId = null;
let targetBorder = null;
let targetElement = null;

export default function NoteColor(props) {
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
      <div className="color-selector-div">
        <div
          onClick={(e) => {
            // #e74c3c red
            e.target.parentElement.parentElement.style.backgroundColor = "#e74c3c";
            targetElement = e.target.parentElement.parentElement;

            targetColor = e.target.parentElement.parentElement.style.backgroundColor;
            targetId = Number(e.target.parentElement.parentElement.id);
            targetBorder = "#f1c40f";

            updateArrayConditional();
            colorFunction();
          }}
          id="color-one"
          className="color color-first"
        ></div>
        <div
          onClick={(e) => {
            // #2ecc71 green
            e.target.parentElement.parentElement.style.backgroundColor = "#2ecc71";
            targetElement = e.target.parentElement.parentElement;
            targetColor = e.target.parentElement.parentElement.style.backgroundColor;
            targetId = Number(e.target.parentElement.parentElement.id);
            targetBorder = "#f1c40f";

            updateArrayConditional();
            colorFunction();
          }}
          id="color-two"
          className="color color-second"
        ></div>
        <div
          onClick={(e) => {
            //#f1c40f yellow
            e.target.parentElement.parentElement.style.backgroundColor = "#f1c40f";
            targetElement = e.target.parentElement.parentElement;
            targetColor = e.target.parentElement.parentElement.style.backgroundColor;
            targetId = Number(e.target.parentElement.parentElement.id);
            targetBorder = "#34495e";

            updateArrayConditional();
            colorFunction();
          }}
          id="color-three"
          className="color color-third"
        ></div>
        <div
          onClick={(e) => {
            // white
            e.target.parentElement.parentElement.style.backgroundColor = "white";
            targetElement = e.target.parentElement.parentElement;
            targetColor = e.target.parentElement.parentElement.style.backgroundColor;
            targetId = Number(e.target.parentElement.parentElement.id);
            targetBorder = "#f1c40f";

            updateArrayConditional();
            colorFunction();
          }}
          id="color-four"
          className="color color-fourth"
        ></div>

        <div
          onClick={(e) => {
            // #e67e22 purple
            e.target.parentElement.parentElement.style.backgroundColor = "#8E44AD";
            targetElement = e.target.parentElement.parentElement;
            targetColor = e.target.parentElement.parentElement.style.backgroundColor;
            targetId = Number(e.target.parentElement.parentElement.id);
            targetBorder = "#f1c40f";

            updateArrayConditional();
            colorFunction();
          }}
          id="color-six"
          className="color color-sixth"
        ></div>
        <div
          onClick={(e) => {
            // #e67e22 blue
            e.target.parentElement.parentElement.style.backgroundColor = "#2C3E50";
            targetElement = e.target.parentElement.parentElement;
            targetColor = e.target.parentElement.parentElement.style.backgroundColor;
            targetId = Number(e.target.parentElement.parentElement.id);
            targetBorder = "#f1c40f";

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
