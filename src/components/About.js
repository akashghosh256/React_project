import React from "react";

export default function About(props) {
  return (
    <div className="card"  
    >
      <div className="card-body"  style={{
              backgroundColor: props.mode === "dark" ? "#2a4c88" : "white",
              fontSize: "26px",
              color: props.mode === "dark" ? "white" : "black",
            }}>
        <h1>Hi There :)</h1>
        <h3>
          This is my first React project which is a word player. It can be used for playing with words like changing the case of words, removing extra spaces, counting the number of words and characters, and replacing a word with another word.
        </h3>
        <h2>Hope you find it useful.</h2>
      </div>
    </div>
  );
}
