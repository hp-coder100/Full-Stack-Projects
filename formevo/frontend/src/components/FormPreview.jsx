import React from "react";
import FormElement from "./FormElement";
const FormPreview = ({ formData, editData }) => {
  const deleteElement = (index) => {
    const tempData = {
      ...formData,
      formElements: formData?.formElements.filter((ele, idx) => idx !== index),
    };
    editData(tempData);
  };

  return (
    <div className="p-2 max-h-screen overflow-y-scroll">
      <div className="container bg-white border border-gray-500 rounded-xl p-8 shadow-lg max-w-2xl mx-auto shadow-lg shadow-sky-900">
        <h2 className="text-2xl font-bold  border-b-2 border-gray-700 pb-2">
          {formData?.heading ? formData.heading : "Form Heading"}
        </h2>
        <div className="text-md text-gray-600 p-2">
          {formData?.description ? formData.description : "Form Description..."}
        </div>

        <form className="p-2 flex-row">
          <FormElement
            question={formData?.candidateId ? formData?.candidateId :"Candidate Id"}
            type={"text"}></FormElement>
          {formData?.formElements?.map((element, index) => (
            <div
              key={index}
              className="flex-row border border-gray-400 p-1 mb-1">
              <div
                onClick={() => deleteElement(index)}
                className="text-red-500 font-bold text-sm text-right p-1 cursor-pointer">
                Remove
              </div>
              <FormElement {...element} />
            </div>
          ))}
          <div className="basis-1/3 ms-auto flex ">
            <button
              disabled
              type="submit"
              className="rounded-full px-4 py-2 text-white text-sm ms-auto mt-2 font-medium bg-blue-700 hover:bg-blue-900 ">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPreview;
