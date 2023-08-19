import React, { useState } from "react";

const CheckboxQuestion = ({ question, options, update, index }) => {
  const [res, setRes] = useState([]);
  const change = (e) => {
    const newRes = {};
    let nRes = [...res];
    if (e.target.checked) {
      nRes = [...nRes, e.target.value];
    } else {
      nRes = nRes.filter((item) => item !== e.target.value);
    }
    setRes(nRes);
    newRes[question] = nRes;
    update(index, newRes);
  };
  return (
    <div className="p-2 mb-2">
      <p className="text-xl mb-1 font-medium text-gray-800 w-full inline-block">
        {question}
      </p>
      {options.map((option, index) => (
        <div className="p-1 flex items-center" key={index}>
          <input
            className="appearence-none w-4 h-4 me-2"
            type="checkbox"
            name={question}
            value={option}
            onChange={(e) => change(e)}
          />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxQuestion;
