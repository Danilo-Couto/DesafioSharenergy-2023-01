import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RandomDog() {
  const [isLoading, setIsLoading] = useState(false);
  const [imgDog, setImgDog] = useState('');

  const generateImg = () => {
    axios
    .get('https://random.dog/woof.json')
    .then(res => {
      const result = res.data.url;
      setImgDog(result);
    });
  } 

  useEffect(() => {
    setIsLoading(true);
    generateImg();
    setIsLoading(false);
  }, []);

  if (imgDog.endsWith('.mp4')){
    console.log('image is mp4')
    generateImg()
  };

  return (
    <>
      <h1>RANDOM DOG</h1>
      <button onClick={generateImg}>New Dog Image</button>
      <div>
        {
          // imgDog.endsWith('.mp4') ?
          // (<div> Your image didnt show. Refresh Again...</div>):
        isLoading ?
          ( <div className="loading">Loading...</div>):
        <img
          src={`${imgDog}`}
          alt={`${imgDog}`}
      />
    }
      </div>
    </>
  );
};

