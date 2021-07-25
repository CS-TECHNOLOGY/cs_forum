import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const response = await fetch("http://localhost:5000/");
    const jsonData = await response.json()
    setData(jsonData);
  }, []);
  return <div>{JSON.stringify(data)}</div>;
};

export default App;
