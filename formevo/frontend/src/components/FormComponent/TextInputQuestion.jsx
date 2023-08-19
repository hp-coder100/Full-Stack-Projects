import React from "react";

const TextInputQuestion = ({ question, update, index }) => {
  const change = (e) => {
    const newRes = {};
    newRes[question] = e.target.value;

    update(index, newRes);
  };

  return (
    <div className="p-2 mb-2">
      <label className="text-xl mb-1 font-medium text-gray-800 w-full inline-block">
        {question}
      </label>
      <input
        onChange={(e) => change(e)}
        className="w-full p-1 text-md rounded-md text-gray-900 focus:outline-none border-b border-gray-600 bg-gray-200"
        placeholder="Your answer"
        type="text"
      />
    </div>
  );
};

export default TextInputQuestion;
