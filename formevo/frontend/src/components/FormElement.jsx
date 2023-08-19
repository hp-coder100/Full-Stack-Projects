import React from "react";
import TextInputQuestion from "./FormComponent/TextInputQuestion";
import MultiLineTextInputQuestion from "./FormComponent/MultiLineTextInputQuestion";
import RadioQuestion from "./FormComponent/RadioQuestion";
import CheckboxQuestion from "./FormComponent/CheckboxQuestion";
import DropdownQuestion from "./FormComponent/DropdownQuestion";

const FormElement = (props) => {
  switch (props.type) {
    case "text":
      return <TextInputQuestion {...props} />;
    case "multiLineText":
      return <MultiLineTextInputQuestion {...props} />;
    case "radio":
      return <RadioQuestion {...props} />;
    case "checkbox":
      return <CheckboxQuestion {...props} />;
    case "dropdown":
      return <DropdownQuestion {...props} />;
    default:
      return null;
  }
};

export default FormElement;
