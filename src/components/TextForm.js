import React, { useState } from "react";
//import {Link} from "react-router-dom";


export default function TextForm(props) {

  const handleLowClick = (event) => {
    console.log("lowercase was clicked text => " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = (event) => {
    console.log("clear");
    setText("");
  };
  const handleUpClick = (event) => {
    console.log("Uppercase was clicked text => " + text);
    let newText = text.toUpperCase();
    setText(newText);
   // props.showAlert("Converted to uppercase", "success");
  };
  const handleOnCopy = (event) => {
    console.log("text copied => " + text);
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");        // Adding Alert from App.js to here
  };
  const handleSpace = (event) => {
    console.log("space");
    setText(text.replace(/\s/g, ""));  // \s is used for space and g is used for global
  };
  //  const convertToBold = (event) => {

  //    let newText=  <strong>{text}</strong>;
  //    setText(newText);
  //   };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
    setOriginalString(event.target.value);
  };

  function countWordsAndCharacters(str) {
    if (str.length === 0) {
      return [0, 0, 0];
    }
    // Remove leading and trailing whitespaces
    const trimmedString = str.trim();

    // Remove leading spaces before counting words
    const stringWithoutLeadingSpaces = trimmedString.replace(/^\s+/, "");

    // Split the string into an array of words
    const wordsArray = stringWithoutLeadingSpaces.split(/\s+/);

    // Count the number of characters
    const Nospace = trimmedString.replace(/\s+/g, "");
    const characterCount = Nospace.length;

    const readTime = 0.008 * wordsArray.length;

    // Return an array with both counts
    return [wordsArray.length, characterCount, readTime];
  }



  const handleReplace = () => {
    const replacedString = originalString.replace(
      new RegExp(searchWord, "gi"),  // new RegExp(searchWord, "gi") constructs a regular expression 
      //object using the RegExp constructor. The searchWord is passed as the pattern to search for, and the 
      // flags "gi" are used. The g flag stands for "global," which means it will replace all occurrences of the searchWord,
      //  not just the first one. The i flag stands for "ignore case," meaning it will match the searchWord regardless of the 
      //  case (upper or lower).
      replaceWord
    );

    setText(replacedString);
    props.showAlert("Text Replaced", "success");  // custom alert
  };

  // In React, "state" refers to the object that holds the
  // dynamic data within a component, determining its
  // behavior and appearance. It can be updated over time
  // and triggers component re-rendering to reflect the
  // new state. State should be updated using specific f
  // unctions provided by React, such as
  // setState or state updater functions, rather than
  // directly modifying the state object.
  const [text, setText] = useState("");
  const [originalString, setOriginalString] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [replaceWord, setReplaceWord] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              fontSize: "26px",
            }}
            id="myBox"
            rows="6"
            placeholder=" Input text here"
          ></textarea>
          <button
            type="button"
            className="btn btn-primary mt-4 mx-2"
            onClick={handleUpClick}
          >
            UpperCase
          </button>
          <button
            type="button"
            className="btn btn-primary mt-4 mx-2"
            onClick={handleLowClick}
          >
            LowerCase
          </button>
          {/* <button type="button" className="btn btn-primary mt-4 mx-2"  onClick={convertToBold}>Bold</button> */}
          <button
            type="button"
            className="btn btn-success mt-4 mx-2"
            onClick={handleOnCopy}
          >
            Copy text
          </button>
          <button
            type="button"
            className="btn btn-primary mt-4 mx-2"
            onClick={handleSpace}
          >
            Remove Spaces
          </button>
          <button
            type="button"
            className="btn btn-danger mt-4 mx-2"
            onClick={handleClearClick}
          >
            Clear text
          </button>

          <div
            className="container my-3"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="searchWord">Search Word:</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{
                        backgroundColor: props.mode === "dark" ? "grey" : "white",
                        fontSize: "26px",
                      }}
                      id="searchWord"
                      value={searchWord}
                      onChange={(e) => setSearchWord(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="replaceWord">Replace Word:</label>
                    <input
                      type="text"
                      className="form-control"
                      style={{
                        backgroundColor: props.mode === "dark" ? "grey" : "white",
                        fontSize: "26px",
                      }}
                      id="replaceWord"
                      value={replaceWord}
                      onChange={(e) => setReplaceWord(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <button
                    className="btn btn-primary mt-2"
                    onClick={handleReplace}
                  >
                    Replace
                  </button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div
        className="container my-3 "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        {/* <p>{text.split("")[1] ===""? 0:text.split(" ").length}  words and {text.length} characters</p> */}
        {/* <p>{countWords(text)}  words and {text.length} characters</p> */}
        <p>
          {countWordsAndCharacters(text)[0]} words and{" "}
          {countWordsAndCharacters(text)[1]} characters
        </p>

        <p>{countWordsAndCharacters(text)[2]} Minutes read</p>
        {/* <h2>Preview</h2>
    <p>{text}</p> */}
      </div>
    </>
  );
}
