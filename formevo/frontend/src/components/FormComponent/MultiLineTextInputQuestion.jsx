import React from "react";

const MultiLineTextInputQuestion = ({ question, update, index }) => {
  const change = (e) => {
    const newRes = {};
    newRes[question] = e.target.value;

    update(index, newRes);
  };

  return (
    <div className="p-2 mb-2">
      <label className="text-xl mb-1 font-medium text-gray-800 block">
        {question}
      </label>
      <textarea
        onChange={(e) => change(e)}
        className="w-full p-1 text-md rounded-md text-gray-900 focus:outline-none border-b border-gray-600 bg-gray-200"
        placeholder="Your Answer"
        rows={2}
      />
    </div>
  );
};

export default MultiLineTextInputQuestion;
