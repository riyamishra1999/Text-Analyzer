import React, { useState } from 'react'

export default function TextForm(props) {

    const[text, setText] = useState("");

    const handleClick = () => {
     let newText = text.toUpperCase();
      setText(newText);
    };

    const handleLowClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
    }
    const handleClearClick = () =>{
      let newText = ' ';
      setText(newText);
    }
    const getCharactersWithoutSpace = () => {
      let stringWithoutSpaces = text.replace(/\s/g, "");
      return stringWithoutSpaces.length;
      // return stringWithoutSpaces.length;
    };



    //    setText((text) => {
    //    if(text === text.toUpperCase()){
    //         return text.toLowerCase();

    //     }

    //     else {

    //         return text.toUpperCase();

    //  } });
  

  return (
    <>
    <div className='container'>
      <h1>{props.heading} </h1>
  <div className="form-group">
    <textarea className="form-control" value ={text}id="exampleFormControlTextarea1" rows="10" onChange={e => setText(e.target.value)}></textarea>

  </div>

  <button className='btn btn-primary mx-2' onClick={handleClick} >
   Convert to uppercase.
  </button>
   
  <button className='btn btn-primary mx-2' onClick={handleLowClick} >
   Convert to lowercase.
  </button>
  <button className='btn btn-primary my-2' onClick={handleClearClick} >
   Clear Text
  </button>

    </div>
    <div className='container my-2'>
      <h2>Your text Summary: </h2>
      <p>{text.split(" ").length} words </p>
      <p>{text.length} characters(with spaces) </p>
      <p>{getCharactersWithoutSpace()} characters (without spaces)</p>
      <p>{0.008 * text.split(" ").length} time to read</p>
      <h2>preview</h2>
      <p>{text} </p>

    </div>
    </>
  )
}
