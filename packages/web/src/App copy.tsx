import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [data, setData] = useState();
  
  useEffect(() => {
      (async () => {
        try {
          const { data } = await axios.get('http://localhost:3333/api');
          setData(data.message);
        } catch (err) {
          console.log({ err });
        }
      })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">   
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;