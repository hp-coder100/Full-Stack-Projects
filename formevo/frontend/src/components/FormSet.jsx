import React, { useState } from "react";

function FormSet({ create, discard, formData, editData }) {
  const [question, setQuestion] = useState("");
  const [selectedType, setSelectedType] = useState("text");
  const [options, setOptions] = useState([]);

  const handleAddQuestion = () => {
    if (question.trim() !== "") {
      const newFormElement = {
        type: selectedType,
        question: question.trim(),
        options:
          selectedType === "radio" || selectedType === "checkbox"
            ? options
            : [],
      };

      editData({
        ...formData,
        formElements: formData?.formElements
          ? [...formData.formElements, newFormElement]
          : [newFormElement],
      });
      setQuestion("");
      setOptions([]);
    }
  };
  return (
    <div className=" ">
      <div className="container mx-auto border rounded-xl border-gray-500 flex-row rounded-3 shadow p-4 bg-white shadow-lg shadow-sky-900">
        <div className="w-full flex flex-wrap gap-2 px-2 mb-2 ">
          <label
            htmlFor="heading"
            className="basis-full font-semibold text-gray-800">
            Form Heading
          </label>
          <input
            onChange={(e) => editData({ ...formData, heading: e.target.value })}
            type="text"
            value={formData?.heading}
            className="basis-full p-1 rounded border-b border-gray-900 focus:outline-none"
            placeholder="Provide a Heading for the Form..."></input>
        </div>
        <div className="w-full flex flex-wrap gap-2 px-2 mb-2">
          <label
            htmlFor="description"
            className="basis-full font-semibold text-gray-800">
            Description
          </label>
          <textarea
            onChange={(e) => {
              editData({ ...formData, description: e.target.value });
            }}
            value={formData?.description}
            className="basis-full pb-2 px-1 rounded border-b border-gray-900 focus:outline-none"
            placeholder="Description..."></textarea>
        </div>
        <div className="w-full flex flex-wrap gap-2 px-2 mb-2 ">
          <label
            htmlFor="candidateId"
            className="basis-full font-semibold text-gray-800">
            {`Unique ID Name(i.e. Name, Email, Enrollment)`}
          </label>
          <input
            onChange={(e) =>
              editData({ ...formData, candidateId: e.target.value })
            }
            type="text"
            value={formData?.candidateId}
            className="basis-full p-1 rounded border-b border-gray-900 focus:outline-none"
            placeholder="Provide a Heading for the Form..."></input>
        </div>
        <div className="basis-full font-semibold p-2 text-xl text-gray-800">
          Add New Question
        </div>
        <div className="w-full flex flex-wrap px-2 mb-2 items-center justify-between">
          <label htmlFor="selecttype" className="basis-1/3">
            Type :{" "}
          </label>
          <select
            className="p-2 rounded border border-gray-400 basis-2/3"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}>
            <option value="text">Text</option>
            <option value="multiLineText">Multi-line Text Input</option>
            <option value="radio">Radio Button (Single Choice)</option>
            <option value="checkbox">Checkbox (Multiple Choice)</option>
            {/* <option value="dropdown">Dropdown (Select)</option> */}
          </select>
        </div>

        <div className="w-full flex flex-wrap px-2 mb-2 items-center justify-between">
          <label htmlFor="question" className="basis-1/3">
            Question :{" "}
          </label>
          <input
            className="p-1 focus:outline-none bg-white rounded border border-gray-400 basis-2/3"
            type="text"
            value={question}
            placeholder="Write Question...."
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        {selectedType === "radio" || selectedType === "checkbox" ? (
          <div className="w-full flex flex-wrap px-2 mb-2 items-center justify-between">
            <label htmlFor="question" className="basis-1/3">
              {"Options (Comma Separated) "}
            </label>
            <input
              className="p-1 focus:outline-none bg-white rounded border border-gray-400 basis-2/3"
              type="text"
              placeholder="Enter options (comma-separated)"
              value={options.join(",")}
              onChange={(e) => setOptions(e.target.value.split(","))}
            />
          </div>
        ) : null}
        <div className="flex">
          <button
            onClick={handleAddQuestion}
            className="w-full mb-2 px-4 py-1 bg-blue-700 text-sm text-white hover:bg-blue-900 rounded-full">
            Add Question
          </button>
        </div>
        <div className="flex pt-2 justify-between items-center border-t-2 border-gray-700">
          <button
            onClick={(e) => create(e)}
            className="px-4 py-2 bg-blue-700 text-sm text-white hover:bg-gradient-to-l hover:shadow-lg hover:shadow-gray-400 rounded-full  bg-gradient-to-r from-blue-800 to-sky-600">
            Create Form
          </button>
          <button
            onClick={(e) => {
              discard(e);
            }}
            className="px-4 py-2 bg-blue-700 text-sm text-white hover:bg-gradient-to-l hover:shadow-lg hover:shadow-gray-400 rounded-full  bg-gradient-to-r from-red-800 to-red-600">
            Discard Form
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormSet;

// <div className="flex-row gap-2">
//         <div className="inline">Type Of Question</div>
//         <select
//           className="inline"
//           value={selectedType}
//           onChange={(e) => setSelectedType(e.target.value)}>
//           <option value="text">Text</option>
//           <option value="multiLineText">Multi-line Text Input</option>
//           <option value="radio">Radio Button (Single Choice)</option>
//           <option value="checkbox">Checkbox (Multiple Choice)</option>
//           <option value="dropdown">Dropdown (Select)</option>
//         </select>

//         <button className="bg-gray-600 px-4 py-1 text-md text-white rounded-full" onClick={handleAddQuestion}>Add Question</button>
//       </div>
