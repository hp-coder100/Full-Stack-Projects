import Popup from "../components/Popup";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loadder from "../components/Loadder";
import { axiosLoadResponses } from "../apiservice/MyAxios";
function ViewResponses() {
  const [responses, setResponses] = useState([]);
  const [selected, setSeleted] = useState("");
  const location = useLocation();
  const form = location.state.form;
  const [laoding, setLoading] = useState(false);
  const [popUpMsg, setPopUpMsg] = useState("");
  const [popupShow, setPopUpShow] = useState(false);
  useEffect(() => {
    const loadResponses = async () => {
      setLoading(true);

      const result = await axiosLoadResponses(form._id);
      if (result.response) {
        setResponses(result.data);
        setLoading(false);
      } else {
        setLoading(false);
        setPopUpMsg(result.msg);
        setPopUpShow(true);
      }
    };
    loadResponses();
  }, [location]);

  return (
    <>
      {laoding && <Loadder></Loadder>}
      {<Popup show={popupShow} setShow={setPopUpShow} msg={popUpMsg} />}
      <div className="container mx-auto py-20 ">
        <div className="relative overflow-x-auto  shadow-md sm:rounded-lg ">
          <table className="w-full mx-auto text-sm text-left text-gray-500 border border-gray-900">
            <caption className="p-5 text-2xl font-semibold text-left text-gray-900 bg-white">
              {form.heading}
              <p className="mt-1 text-sm  font-normal text-gray-500 ">
                {form.description}
              </p>
              {responses.length === 0 && <div className="text-center w-full text-gray-800">No Responses Yet</div>}
            </caption>
            <thead className="sticky text-md text-white  uppercase border-b border-gray-900 bg-blue-800 ">
              <tr>
                <th scope="col" className="px-6 py-3 ">
                  {form?.candidateId}
                </th>
                {form?.formElements.map((ele) => (
                  <th className="px-6 py-3 ">{ele.question}</th>
                ))}
              </tr>
            </thead>
            
            <tbody className="">
              
              {responses.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => setSeleted(index)}
                  className={`${
                    selected === index ? `bg-gray-300` : `bg-white`
                  } border-b border-gray-400 hover:bg-gray-300`}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-r border-gray-400">
                    {item.candidateId}
                  </th>
                  {item.responses.map((ele) =>
                    Object.entries(ele).map((entry) => (
                      <td className="px-6 py-4 border-r border-gray-400">
                        {typeof entry[1] === "string"
                          ? entry[1]
                          : entry[1].join()}
                      </td>
                    ))
                  )}
                </tr>
              ))}
            </tbody>
            
          </table>
        </div>
      </div>
    </>
  );
}

export default ViewResponses;
