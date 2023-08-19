import React from "react";

const DropdownQuestion = ({ question, options }) => {
  return (
    <div>
      <label>{question}</label>
      <select>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownQuestion;
