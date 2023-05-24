import React from "react";

export default function About(props) {
  return (
    <>
      <div className="my-3">
        <h1 className={` text-${props.mode === "light" ? "dark" : "light"}`}>
          {" "}
          <u>About Us</u>
        </h1>
        <p className={` text-${props.mode === "light" ? "dark" : "light"} `}>
          Welcome to our text conversion tool website named as{" "}
          <strong>TextPlay</strong>! We offer a simple yet powerful set of tools
          that allow you to manipulate and transform your text with ease.
          Whether you need to convert text to lowercase, uppercase, clear
          unwanted formatting, or simply copy the text, we've got you covered.
        </p>{" "}
        <p
          className={` text-${props.mode === "light" ? "dark" : "light"} my-2`}
        >
          Our conversion tools are designed to be user-friendly and efficient,
          enabling you to quickly achieve the desired text transformation
          without any hassle. Whether you're a student, professional, or just
          someone looking to streamline their text editing tasks, our website is
          the perfect companion for all your needs.
        </p>
        <div className="accordion my-5" id="accordionExample">
          <div className="accordion-item">
            <h2 className={`accordion-header `} id="headingOne">
              <button
                className={`accordion-button collapsed  text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "#0C2233",
                }}
              >
                Lowercase & Uppercase Converter
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion-body text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                style={{
                  backgroundColor:
                    props.mode === "light" ? "#FFFBEB" : "#0b87c0",
                }}
              >
                <strong> With our lowercase converter,</strong> you can easily
                convert any text into lowercase letters. This can be
                particularly useful when you want to standardize the case of
                your text or make it more readable. On the other hand, if you
                need to convert your text to uppercase, our uppercase converter
                will do the job for you, capitalizing every letter and giving
                your text a bold appearance.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className={`accordion-button collapsed  text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "#0C2233",
                }}
              >
                Clear Text
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion-body text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                style={{
                  backgroundColor:
                    props.mode === "light" ? "#FFFBEB" : "#0b87c0",
                }}
              >
                It will clear the large paragraph from the text area at allows
                which will saves your time & effort.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className={`accordion-button collapsed  text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{
                  backgroundColor: props.mode === "light" ? "white" : "#0C2233",
                }}
              >
                Copy Text
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion-body text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                style={{
                  backgroundColor:
                    props.mode === "light" ? "#FFFBEB" : "#0b87c0",
                }}
              >
                <strong>We offer a convenient copy text feature,</strong>{" "}
                allowing you to quickly copy the transformed text to your
                clipboard. No need to manually select and copy the text; with
                just a click of a button, you can copy the converted text and
                paste it wherever you need it.
              </div>
            </div>
          </div>

          <footer
            className={` text-${
              props.mode === "light" ? "dark" : "light"
            } my-2 text-center my-3`}
          >
            {" "}
            <strong>Copyright© 2023</strong>{" "}
          </footer>
        </div>
      </div>
    </>
  );
}
