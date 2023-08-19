import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import DashBoard from "./pages/DashBoard";
import FormBuilder from "./pages/FormBuilder";
import FormService from "./pages/FormService";
import LoginResgistrationPage from "./pages/LoginResgistrationPage";
import VerifyEmail from "./pages/VerifyEmail";
import Submitted from "./components/Submitted";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewResponses from "./pages/ViewResponses";
import { useEffect } from "react";
import { useStateValue } from "./state/StateProvider";
import AboutUs from "./pages/AboutUs";
import UpdatePassword from "./pages/UpdatePassword";
import Error404 from "./pages/Error404";
function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem("state"));
    dispatch({ type: "SET_USER", user: state?.user });
  }, []);

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/auth/:tab"
          element={<LoginResgistrationPage></LoginResgistrationPage>}></Route>
        <Route
          path="/updatepassword/:token"
          element={<UpdatePassword></UpdatePassword>}></Route>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
        <Route path="/newform" element={<FormBuilder></FormBuilder>}></Route>
        <Route path="/submitted" element={<Submitted></Submitted>}></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route
          path="/verify/:token"
          element={<VerifyEmail></VerifyEmail>}></Route>
        <Route
          path="/formService/:formId"
          element={<FormService></FormService>}></Route>
        <Route
          path="/viewresponse"
          element={<ViewResponses></ViewResponses>}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
