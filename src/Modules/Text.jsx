import React, { useState } from "react";

export default function Text(props) {
  let ClickedUpCase = () => {
    setText(Text.toUpperCase());
  };

  const [Text, setText] = useState("Enter your text here...");

  let handleToChange = (evt) => {
    setText(evt.target.value);
  };

  let ClickedLowCase = () => {
    setText(Text.toLowerCase());
  };

  let CountWords = () => {
    Text.trim();
    let spaceCount = 0;
    let words;
    if (Text.length === 0) {
      words = 0;
    } 
    else {
      for (let i = 0; i < Text.length-1; i++) {
        if(Text.charAt(i) === " " && Text.charAt(i+1) === " ")
            continue;
        if(Text.charAt(i) === " ")
            spaceCount++;
      }
      words = ++spaceCount;
    }
    return words;
  };



//   let CountCharacters = () => {
//     let characters = 0;
//     if(Text.length === 0){
//         characters = 0;
//     }
//     else {
//         for(let i = 0;i<Text.length;i++){
//             if(Text.charAt(i) === " ")
//                 continue;
//             characters++;
//         }
//     }
//     console.log(characters);
//     return characters;
//   }
//   let characters = CountCharacters();
  let word = CountWords();
  return (
    <div>
      <div className="mb-3 my-3 container">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          value={Text}
          onChange={handleToChange}
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
        <input
          type="button"
          value="Conert to Upper Case"
          onClick={ClickedUpCase}
          className="btn btn-primary mb-3 my-2"
        />
        <input
          type="button"
          value="Conert to Lower Case"
          onClick={ClickedLowCase}
          className="btn btn-primary mb-3 mx-1 my-2"
        />
      </div>
      <div className="container">
      <h2>Your Text Summary is :</h2>
      <p>{word} words and {Text.length} characters</p>
      <p>Time required to read : {word*0.008} minutes</p>
      </div>
      <div className="container">
        <h3>Preview : </h3>
        <p>{Text}</p>
      </div>
    </div>
  );
}
