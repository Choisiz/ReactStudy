import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const API = process.env.REACT_APP_API_KEY;
  const onClick = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API}`
      );
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          row={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
