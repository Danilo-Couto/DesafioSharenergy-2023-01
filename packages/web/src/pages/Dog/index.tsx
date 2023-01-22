import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function RandomDog() {
  const [isLoading, setIsLoading] = useState(false);
  const [imgDog, setImgDog] = useState('');

  const generateImg = async () => {
    axios
    .get('https://random.dog/woof.json')
    .then(res => {
      setImgDog(res.data.url);
    });
  } 

  useEffect(() => {
    setIsLoading(true);
    generateImg();
    setIsLoading(false);
  }, []);

  // if (imgDog.endsWith('.mp4')){
  //   console.log('image is mp4');
  // };

  return (
    <>
      <h1>RANDOM DOG</h1>
      <button onClick={generateImg}>New Dog Image
      </button>
      <div>
        {
          imgDog.endsWith('.mp4') ?
          <video width="500" height="250" 
              // ref={videoEl}
              controls
              autoPlay
            >
            <source src={imgDog} type="video/mp4"/>
          </video>
          : <img
            src={`${imgDog}`}
            alt={`${imgDog}`} 
          />
        }
      </div>
    </>
  );
};

