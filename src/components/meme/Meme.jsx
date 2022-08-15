import React, { useState } from "react";
import memesData from "../../memesData";
import { Form, MemeImg, MemeDiv } from "../styles";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setallMemeImages] = useState(memesData);
  const getMemeImage = () => {
    let memesArray = allMemeImages.data.memes;
    let random = Math.floor(Math.random() * memesArray.length + 1);
    let meme = memesArray[random].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: meme,
    }));
  };

  function handleChange(event) {
    const {name, value} = event.target
    console.log(event.target.value);
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value
    }));
  }

  return (
    <Form>
      <div>
        <input type="text" placeholder="Top Text" onChange={handleChange} name = "topText" value = {meme.topText} />
        <input type="text" placeholder="Bottom Text" onChange={handleChange} name = "bottomText" value = {meme.bottomText} />
      </div>
      <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      <MemeDiv>
        <MemeImg src={meme.randomImage} alt="" />
        <h2 className="top-text">{meme.topText}</h2>
        <h2 className="bottom-text">{meme.bottomText}</h2>
      </MemeDiv>
    </Form>
  );
}

export default Meme;
