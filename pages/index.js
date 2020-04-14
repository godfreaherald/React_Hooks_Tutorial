import React, { useState } from "react";

const InputText = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);
  return (
    <>
      <input
        type="text"
        placeholder="enter some text"
        onChange={(e) => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
      />
      <br />
      <hr />
      <ul>
        {historyList.map((value) => {
          return <div key={value}>{value}</div>;
        })}
      </ul>
    </>
  );
};

export default InputText;
