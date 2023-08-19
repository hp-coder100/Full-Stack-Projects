import React, { useEffect, useState } from "react";
import FormElement from "../components/FormElement";
import axios from "axios";
import Popup from "../components/Popup";
import Loadder from "../components/Loadder";
import { useNavigate, useParams } from "react-router-dom";
import { axiosLoadForm, axiosSubmitFormResponse } from "../apiservice/MyAxios";

function FormService() {
  const navigateTo = useNavigate();
  const { formId } = useParams();

  const [formData, setFormData] = useState(null);
  const [candidateId, setCandidateId] = useState(null);
  const [formResponse, setFormResponse] = useState([]);
  const [formLoaded, setFormLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitRes, setSubmitRes] = useState(null);
  const [popupShow, setPopupShow] = useState(false);
  const [submitShow, setSubmitShow] = useState(false);
  const [popUpMsg, setPopUpMsg] = useState("");
  const submitMsg = "Are You sure to submit the form.";
  const setResponse = (data) => {
    const newResponse = [];
    data?.forEach((element) => {
      const res = {};
      res[element.question] = element.type === "checkbox" ? [] : "";
      newResponse.push(res);
    });
    setFormResponse(newResponse);
  };

  const updateResponse = (idx, res) => {
    const newfrom = formResponse.map((item, index) =>
      index === idx ? res : item
    );
    setFormResponse(newfrom);
  };
  const validate = () => {
    if (!candidateId) {
      setPopUpMsg(`${formData?.candidateId} is Required.`);
      setPopupShow(true);
      setPopupShow(true);
      return false;
    }
    return true;
  };
  const submitResponse = async () => {
    if (!submitRes) return;
    setLoading(true);

    const result = await axiosSubmitFormResponse(submitRes);

    if (result.response) {
      setLoading(false);
      navigateTo("/submitted");
    } else {
      setLoading(false);
      setPopUpMsg(result.msg);
      setPopupShow(true);
    }
  };

  const loadForm = async () => {
    setLoading(true);
    const result = await axiosLoadForm(formId);
    if (result.response) {
      setLoading(false);
      setResponse(result.data?.formElements);
      setFormData(result.data);
      setFormLoad(true);
    } else {
      setLoading(false);
      setPopUpMsg(result.msg);
      setPopupShow(true);
    }
  };
  useEffect(() => {
    console.log(1);
    if (formLoaded === false) {
      loadForm();
    }
  }, [formLoaded]);

  return (
    <>
      {loading && <Loadder></Loadder>}
      <Popup
        action={submitResponse}
        show={submitShow}
        setShow={setSubmitShow}
        msg={submitMsg}></Popup>

      <Popup show={popupShow} setShow={setPopupShow} msg={popUpMsg}></Popup>
      <Popup></Popup>
      <div className="container flex  mx-auto px-4 py-20">
        {!formData && (
          <div className="text-red-600 text-2xl font-bold text-center mx-auto mt-4">
            Invalid Form !!!
            <button
              onClick={() => navigateTo("/")}
              className="block m-4 bg-gradient-to-r from-blue-800 to-sky-500 rounded-full font-medium text-sm px-4 text-white py-2 hover:shadow hover:shadow-gray-500 hover:scale-105">
              Go to HomePage
            </button>
          </div>
        )}

        {formData && (
          <div className="container bg-white border border-gray-500 rounded-xl p-8 shadow-lg max-w-2xl mx-auto shadow-blue-700">
            <h2 className="text-2xl font-bold  border-b-2 border-gray-700 pb-2">
              {formData?.heading ? formData.heading : "Form Heading"}
            </h2>

            <div className="text-md text-gray-600 p-2">
              {formData?.description
                ? formData.description
                : "Form Description..."}
            </div>
            <div className="p-2 mb-2">
              <label className="text-xl mb-1 font-medium text-gray-800 w-full inline-block">
                {formData?.candidateId}{" "}
                <span className="text-red-600">{"*"}</span>
              </label>
              <input
                onChange={(e) => setCandidateId(e.target.value)}
                className="w-full p-1 text-md rounded-md text-gray-900 focus:outline-none border-b border-gray-600 bg-gray-200"
                placeholder="Your answer"
                type="text"
                required
              />
            </div>
            <form className="p-2 flex-row">
              {formData?.formElements?.map((element, index) => (
                <div key={index}>
                  <FormElement
                    index={index}
                    update={updateResponse}
                    {...element}
                  />
                </div>
              ))}
              <div className="basis-1/3 ms-auto flex ">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (validate()) {
                      setSubmitRes({
                        formId,
                        candidateId,
                        responses: formResponse,
                      });
                      setSubmitShow(true);
                    }
                  }}
                  className="rounded-full px-4 py-2 ms-auto mt-2 font-medium bg-blue-600 hover:bg-blue-900 text-white">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default FormService;
