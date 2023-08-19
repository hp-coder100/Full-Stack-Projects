import React, { useEffect, useState } from "react";
import FormPreview from "../components/FormPreview";
import FormSet from "../components/FormSet";
import axios from "axios";
import Loadder from "../components/Loadder";
import Popup from "../components/Popup";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";
import { axiosCreateForm } from "../apiservice/MyAxios";

const FormBuilder = () => {
  const navigateTo = useNavigate();
  const [{ user }, dispatch] = useStateValue();
  const [formData, setFormData] = useState(null);
  const [logs, setLogs] = useState(0);
  const [loading, setLoading] = useState(false);

  const [popupShow, setPopupShow] = useState(false);
  const [discardShow, setDisCardShow] = useState(false);
  const [createShow, setCreateShow] = useState(false);
  const [popUpMsg, setPopUpMsg] = useState("");
  const discardMsg = "Are you sure to dicard this Form";

  const createMsg =
    "Confirm to Create The form. You won't be albe to make changes once created.";

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("currentForm"));
    if (data) {
      setFormData(data);
    }
  }, [logs]);

  const editData = (tempData) => {
    sessionStorage.setItem("currentForm", JSON.stringify(tempData));
    setLogs(logs + 1);
  };
  const validate = () => {
    if (formData === null) {
      setPopUpMsg("Can not create a empty form");
      setPopupShow(true);
      return false;
    }
    if (!formData.heading) {
      setPopUpMsg("Please provide a Heading for Your From.");
      setPopupShow(true);
      return false;
    }
    if (!formData.description) {
      setPopUpMsg("Please provide description for Your From.");
      setPopupShow(true);
      return false;
    }
    if (!formData.candidateId) {
      setPopUpMsg("Please provide description for Your From.");
      setPopupShow(true);
      return false;
    }

    return true;
  };

  const createForm = async () => {
    const data = { ...formData, userId: user };
    setLoading(true);

    const result = await axiosCreateForm(data);
    if (!result.response) {
      setLoading(false);
      setPopUpMsg(result.msg);
      setPopupShow(true);
    } else {
      setLoading(false);
      sessionStorage.removeItem("currentForm");
      navigateTo("/dashboard");
    }
  };

  const discardForm = () => {
    sessionStorage.removeItem("currentForm");
    navigateTo("/dashboard");
  };

  return (
    <>
      {loading && <Loadder></Loadder>}
      <Popup
        action={discardForm}
        show={discardShow}
        setShow={setDisCardShow}
        msg={discardMsg}></Popup>
      <Popup
        action={createForm}
        show={createShow}
        setShow={setCreateShow}
        msg={createMsg}></Popup>

      <Popup show={popupShow} setShow={setPopupShow} msg={popUpMsg}></Popup>
      <div className="w-full pt-20 flex flex-wrap p-4">
        <div className="basis-full lg:basis-1/3 ">
          <FormSet
            discard={() => setDisCardShow(true)}
            create={() => {
              if (validate()) setCreateShow(true);
            }}
            formData={formData}
            editData={editData}></FormSet>
        </div>
        <div className="basis-full lg:basis-2/3 flex-row">
          <div className="text-xl font-semibold text-center text-white rounded-full border-b border-gray-400 py-1 mx-4 bg-gradient-to-r from-blue-800 to-sky-600 mt-8 lg:mt-0">
            Form Preview
          </div>
          <div>
            <FormPreview formData={formData} editData={editData}></FormPreview>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormBuilder;
