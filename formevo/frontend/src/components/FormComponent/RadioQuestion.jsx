import React from "react";

const RadioQuestion = ({ question, options, update, index }) => {
  const change = (e) => {
    const newRes = {};
    newRes[question] = e.target.value;
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
            onChange={(e) => change(e)}
            className="appearence-none w-4 h-4 me-2"
            type="radio"
            name={question}
            value={option}
          />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioQuestion;
