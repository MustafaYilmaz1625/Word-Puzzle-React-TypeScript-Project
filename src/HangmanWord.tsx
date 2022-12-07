import React from "react";
const word ="test"
const guessedLetters= ["t","e","g"]

const HangmanWord = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {word.split(" ").map((letter, index) => (
        <span style={{ borderBottom: "1em solid black" }} key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            //   color:
            //     !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          ></span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
