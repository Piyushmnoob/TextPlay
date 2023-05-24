import React, { useState } from "react";

import PropTypes from "prop-types";

export default function Textarea(props) {
  // The 'useState' hook (function) returns a getter (variable) & setter (function) for your state value -
  //  and takes the initial/default value for it/to set it to, e.g.
  const [text, setText] = useState("");

  // arrow function's
  const toupcase = () => {
    // console.log("toupcase button is clicked");

    // setter function to change the value of getter var.
    // setText("state has changed using setter function.");

    setText(text.toUpperCase());

    // agr text area m koi v word na ho toh alert call nhi hona chahiye uske liye h.

    // if(text.length !== 0) props.shAlert("Converted to Upper Case", "success");

    // text ko string array m convert kiya & then uss array m se empty string ko remove kiya with the help of
    //  filter funcn so...agr text m words rha toh array empty nhi hoga. filter funcn returns either T / F
    if (
      text.split(" ").filter((element) => {
        return element.length !== 0;
      }).length !== 0
    ) {
      props.shAlert("Converted to Upper Case", "success");
    }
  };

  const tolocase = () => {
    let newText = text.toLowerCase();

    setText(newText);

    // if(text.length !== 0) props.shAlert("Converted to Lower Case", "success");

    if (
      text.split(" ").filter((element) => {
        return element.length !== 0;
      }).length !== 0
    ) {
      props.shAlert("Converted to Lower Case", "success");
    }
  };

  const handler = (event) => {
    // console.log("event captured.");

    setText(event.target.value);
  };

  const capitalEachWord = () => {
    let a = text.split(" ");

    for (let i = 0; i < a.length; i++) {
      a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    // console.log(a);

    let s = a.join(" ");

    setText(s);

    // if(text.length !== 0) props.shAlert("First Letter of each word is captial now !!!", "success");

    if (
      text.split(" ").filter((element) => {
        return element.length !== 0;
      }).length !== 0
    ) {
      props.shAlert("First Letter of each word is captial now !!!", "success");
    }
  };

  const copyText = () => {
    let text = document.getElementById("myBox");

    // alert(text.value);

    if (text.value !== "") {
      text.select(); // abhi agr text hoga v nhi toh yeh copy kr dega. so spaces copy honge.

      // hmko yeh nhi chahiye..hence, hm filter() funcn ka use krenge.

      // Copy the text inside the text field
      navigator.clipboard.writeText(text.value);

      text.select();
      navigator.clipboard.writeText(text.value);

      props.shAlert("text copied to clipboard :)", "success");
    }
  };

  const clearText = () => {
    setText("");

    // if(text.length !== 0) props.shAlert("Text Cleared!!!", "success");

    if (
      text.split(" ").filter((element) => {
        return element.length !== 0;
      }).length !== 0
    ) {
      props.shAlert("Text Cleared!!!", "success");
    }
  };

  return (
    <>
      <div>
        <div className="mb-3 my-2">
          <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
            <u>{props.title}</u> :-
          </h1>
          <textarea
            className={`form-control my-3  
            text-${props.mode === "light" ? "dark" : "dark"}`}
            id="myBox"
            rows="10"
            value={text}
            onChange={handler} // event capture
            style={{
              backgroundColor: props.mode === "light" ? "#F5EDCE" : "#F7F5EB",
            }}
          ></textarea>
        </div>

        <button className="btn btn-info mx-2 my-1" onClick={toupcase}>
          {" "}
          Convert to UPPERCASE
        </button>

        <button className="btn btn-info mx-2 my-1" onClick={tolocase}>
          {" "}
          Convert to Lowercase
        </button>
        <button className="btn btn-info mx-2 my-1" onClick={capitalEachWord}>
          {" "}
          Capitalize Each Word
        </button>

        <button className="btn btn-info mx-2 my-1" onClick={copyText}>
          {" "}
          Copy Text Area
        </button>

        <button className="btn btn-info mx-2 my-1" onClick={clearText}>
          {" "}
          Clear Text
        </button>
      </div>

      <div className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
        <h2> Your Text Summary. </h2>

        <p>
          {" "}
          {/* {textsplit().wordCnt} words & {textsplit().charCnt} characters.{" "} */}
          {
            // video no. 20 ka change kiya hua chiz h.  JS -> regular expression. Watch it, things will clear.
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words & {text.length} characters.
        </p>

        <p> {0.008 * text.split(" ").length} minutes read. </p>

        <h3 className="my-1">
          {" "}
          <u>Preview</u>{" "}
        </h3>

        <p> {text}</p>
      </div>



    </>
  );
}

Textarea.propTypes = {
  title: PropTypes.string,
};

Textarea.defaultProps = {
  title: "Enter text here",
};
