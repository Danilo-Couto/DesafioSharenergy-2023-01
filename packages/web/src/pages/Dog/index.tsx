import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function RandomDog() {
  const [imgDog, setImgDog] = useState('');

  const generateImg = async () => {
    axios
    .get('https://random.dog/woof.json')
    .then(res => {
      setImgDog(res.data.url);
    });
  } 

  useEffect(() => {
    generateImg();
  }, []);

  return (
    <>
      <h1>RANDOM DOG</h1>
      <button onClick={generateImg}>New dog image
      </button>
      <div>
        {
          imgDog.endsWith('.mp4') ?
          <video width="500" height="250" 
              controls
              autoPlay = {true}
            >
            <source src={imgDog} type="video/mp4"/>
          </video>
          : <img
            width="500" height="auto" 
            src={`${imgDog}`}
            alt={`${imgDog}`} 
          />
        }
      </div>
    </>
  );
};

