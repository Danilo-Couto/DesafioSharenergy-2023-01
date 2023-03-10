import React, { useState } from "react";

export default function RandomCat() {
  const [setHttpStatus, setsetHttpStatus] = useState('202');

  const statusArray = Array.from(Array(599).keys()).slice(100, 599);

  const handleChange = ({target}) => {
    setsetHttpStatus(target.value);
  };

  return (
    <>
      <h1>HTTP STATUS</h1>
      <select value={setHttpStatus} onChange={handleChange}
      >
        {statusArray.map((option: number, i: number) => (
          <option key ={i} value={option}>{option}</option>
        ))};
      </select>
      <div>
        <img
          src={`https://http.cat/${setHttpStatus}`}
          alt={`${setHttpStatus}`}
        />
      </div>
    </>
  );
};
