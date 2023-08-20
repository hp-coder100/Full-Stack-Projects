import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dashboardPNG from "../assets/dashboard.png";
import { useStateValue } from "../state/StateProvider";
import Popup from "../components/Popup";
import { axiosDeleteForm, axiosLoadAllForms } from "../apiservice/MyAxios";
import Loadder from "../components/Loadder";
import SyncRoundedIcon from "@mui/icons-material/SyncRounded";
import ContactUs from "../components/ContactUs";
function DashBoard() {
  const navigateTo = useNavigate();
  const [{ user, forms, userName }, dispatch] = useStateValue();
  const [toastShow, setToastShow] = useState(false);
  const [log, setLog] = useState(0);

  const [popupShow, setPopupShow] = useState(false);
  const [discardShow, setDisCardShow] = useState(false);
  const [popUpMsg, setPopUpMsg] = useState("");
  const [discardMsg, setDiscardMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [delFormId, setDelformId] = useState(null);
  const [support, setSupport] = useState(false);
  const deleteFormId = async () => {
    if (!delFormId) return;
    setLoading(true);
    const result = await axiosDeleteForm(delFormId);

    if (result.response) {
      setDelformId(null);
      setLoading(false);
      setPopUpMsg(result.msg);
      setPopupShow(true);
      setLog(log + 1);
    } else {
      setDelformId(null);
      setLoading(false);
      setPopUpMsg(result.msg);
      setPopupShow(true);
    }
  };

  const loadForms = async () => {
    const result = await axiosLoadAllForms(user);
    if (result.response) {
      dispatch({
        type: "SET_FORMS",
        forms: result.data,
      });
    } else {
      setPopUpMsg(result.msg);
      setPopupShow(true);
    }
  };

  useEffect(() => {
    loadForms();
  }, [log]);

  return (
    <>
      {loading && <Loadder></Loadder>}
      <Popup
        action={deleteFormId}
        show={discardShow}
        setShow={setDisCardShow}
        msg={discardMsg}></Popup>

      <Popup show={popupShow} setShow={setPopupShow} msg={popUpMsg}></Popup>
      <ContactUs show={support} setShow={setSupport}></ContactUs>
      <div
        className={`${
          toastShow ? `right-20` : `-right-full`
        } fixed bottom-20 tansitions all duration-300  ease-in text-2xl font-bold z-50`}>
        <div
          id="toast-undo"
          className="flex items-center w-fit p-2 text-gray-700 bg-gray-300 rounded-lg shadow shadow-gray-700"
          role="alert">
          <div className="text-sm font-normal">Form Link Copied.</div>
        </div>
      </div>

      <div className="conatiner-fluid pt-12">
        <div className="container mx-auto flex flex-wrap bg-white mx-auto p-4">
          <div className="basis-full md:basis-1/2 mx-auto">
            <img src={dashboardPNG} alt="dashboard.png" />
          </div>
          <div className="basis-full md:basis-1/2 p-4 mx-auto">
            <div className="text-3xl font-bold text-gray-900">
              Welcome, {userName}
            </div>

            <div className="border-t-1 border-gray-400 mt-4">
              <div className="flex justify-between px-2 items-center">
                <div className="w-full text-xl sm:text-2xl font-semibold text-gray-800">
                  Recent Forms
                </div>
                <button
                  onClick={() => navigateTo("/newform")}
                  className="w-full px-2 py-1 text-white  trasitions duration-150 ease-in-out  tracking-wider bg-gradient-to-r hover:bg-gradient-to-l hover:shadow-md hover:shadow-gray-500 from-blue-900 to-sky-600 rounded-full my-4">
                  Create New Form
                </button>
              </div>
              <div className="relative w-full px-4">
                <div className="w-full flex p-1">
                  <button
                    onClick={() => setLog(log + 1)}
                    className="ms-auto text-blue-800 ">
                    <SyncRoundedIcon fontStyle="medium"></SyncRoundedIcon>
                    <span className="ms-1">Refresh</span>
                  </button>
                </div>
                {forms?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-blue-200 flex flex-wrap sm:flex-nowrap justify-between items-center p-4 m-1 rounded-md">
                      <div className="basis-full sm:basis-1/3 font-semibold text-gray-900 truncate">
                        {item.heading}
                      </div>
                      <div className="basis-full sm:basis-2/3 flex justify-between sm:justify-center items-center gap-3 p-2 text-center">
                        <div
                          onClick={() =>
                            navigateTo(`/viewresponse`, {
                              state: { form: item },
                            })
                          }
                          className="cursor-pointer text-sky-600 hover:text-sky-800 ">
                          View Responses
                        </div>
                        <div
                          onClick={(e) => {
                            setDiscardMsg(
                              "Are you sure to delete the Form : " +
                                item.heading
                            );
                            setDelformId(item._id);
                            setDisCardShow(true);
                          }}
                          className="cursor-pointer text-red-600 hover:text-red-800 ">
                          Delete
                        </div>
                        <div
                          onClick={() => {
                            navigator.clipboard.writeText(
                               window.location.protocol +
      "//" +
      window.location.host + "/formService/" + item._id
                            );
                            setToastShow(true);
                            setTimeout(() => setToastShow(false), 2000);
                          }}
                          className="cursor-pointer text-gray-600 hover:text-gray-800 ">
                          Copy Link
                        </div>
                      </div>
                    </div>
                  );
                })}
                {forms?.length === 0 && (
                  <div className="text-gray-700 text-sm text-center m-8">
                    No forms Available. Try to refresh or create new form.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
