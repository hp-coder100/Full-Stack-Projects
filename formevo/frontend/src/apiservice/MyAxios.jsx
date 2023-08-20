import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
///Singup User....
const axiosSingUp = async (user) => {
  const result = await axios
    .post(BASE_URL + "/user/register", user)
    .then((res) => {
      console.log(res);
      const userId = res?.data?.userId;
      const userName = res?.data?.userName;
      console.log(res?.data?.message);
      return {
        response: true,
        msg: res?.data?.message,
        userId: userId,
        userName: userName,
      };
    })
    .catch((error) => {
      console.log(error?.response);
      const result = {
        response: false,
        msg: error?.response ? error?.response?.data?.message : "Network Error",
      };
      return result;
    });

  return result;
};

const axiosResendVerificationLink = async (email) => {
  const result = await axios
    .post(`${BASE_URL}/user/resendVerificationLink`, { email })
    .then((res) => {
      return {
        response: true,
        msg: res?.data?.message,
      };
    })
    .catch((error) => {
      console.log(error?.response);
      const result = {
        response: false,
        msg: error?.response ? error?.response?.data?.message : "Network Error",
      };
      return result;
    });
  return result;
};

//verificaiton user email
const axiosVerifyEmail = async (token) => {
  const result = await axios
    .get(`${BASE_URL}/user/verify/${token}`)
    .then((res) => {
      return {
        response: true,
        msg: res?.data?.message,
      };
    })
    .catch((error) => {
      console.log(error?.response);
      const result = {
        response: false,
        msg: error?.response ? error?.response?.data?.message : "Network Error",
      };
      return result;
    });

  return result;
};

//Signing in user.....
const axiosLogin = async (user) => {
  const result = await axios
    .post(`${BASE_URL}/user/login`, user)
    .then((res) => {
      const userId = res?.data?.user;
      const userName = res?.data?.userName;
      console.log("User Successfully Loggedin");
      return {
        response: true,
        msg: res?.data?.messsage,
        userId: userId,
        userName: userName,
      };
    })
    .catch((error) => {
      console.log(error?.response);
      const result = {
        response: false,
        msg: error?.response ? error?.response?.data?.message : "Network Error",
      };
      return result;
    });
  return result;
};

//seding password reset link
const axiosResetPassword = async (email) => {
  const result = await axios
    .post(`${BASE_URL}/user/resetpassword`, { email })
    .then((res) => {
      console.log(res);
      return {
        response: true,
        msg: res?.data?.message,
      };
    })
    .catch((error) => {
      console.log(error?.response);
      const result = {
        response: false,
        msg: error?.response ? error?.response?.data?.message : "Network Error",
      };
      return result;
    });
  return result;
};

///Update Password
const axiosUpdatePassword = async (token, password) => {
  const result = await axios
    .post(`${BASE_URL}/user/updatepassword/${token}`, { password })
    .then((res) => {
      console.log("Password Updated Successfully");
      return {
        response: true,
        msg: res?.data?.message,
      };
    })
    .catch((error) => {
      console.log(error?.response);
      const result = {
        response: false,
        msg: error?.response ? error?.response?.data?.message : "Network Error",
      };
      return result;
    });
  return result;
};

/*************************************************************************************************/

//Creating Form...

const axiosCreateForm = async (form) => {
  const result = await axios
    .post(`${BASE_URL}/form`, form)
    .then((res) => {
      console.log(res?.data?.message);
      return { response: true, msg: res?.data?.message };
    })
    .catch((error) => {
      console.log(error?.response);
      const result = {
        response: false,
        msg: error?.response ? error?.response?.data?.message : "Network Error",
      };
      return result;
    });

  return result;
};

///load all forms by userId
const axiosLoadAllForms = async (userId) => {
  const result = await axios
    .get(`${BASE_URL}/form/all/${userId}`)
    .then((res) => {
      const formData = res?.data;
      return {
        response: true,
        msg: res?.data?.message,
        data: formData,
      };
    })
    .catch((error) => {
      console.log(error?.response);
      const result = {
        response: false,
        msg: error?.response ? error?.response?.data?.message : "Network Error",
      };
      return result;
    });
  return result;
};

//Load Form with form Id...
const axiosLoadForm = async (formId) => {
  const result = await axios
    .get(`${BASE_URL}/form/${formId}`)
    .then((res) => {
      const data = res.data;
      return { response: true, msg: res?.data?.message, data: data };
    })
    .catch((error) => {
      console.log(error?.response);
      const result = {
        response: false,
        msg: error?.response ? error?.response?.data?.message : "Network Error",
      };
      return result;
    });
  return result;
};

/// Submit form response...
const axiosSubmitFormResponse = async (data) => {
  const result = await axios
    .post(`${BASE_URL}/form/submit`, data)
    .then((res) => {
      console.log(res?.data?.message);
      return { response: true, msg: res?.data?.message };
    })
    .catch((error) => {
      console.log(error?.response);
      const result = {
        response: false,
        msg: error?.response ? error?.response?.data?.message : "Network Error",
      };
      return result;
    });
  return result;
};

//Deleting Form...
const axiosDeleteForm = async (formId) => {
  const result = await axios
    .delete(`${BASE_URL}/form/${formId}`)
    .then((res) => {
      console.log(res?.data?.message);
      return { response: true, msg: res?.data?.message };
    })
    .catch((error) => {
      console.log(error?.response);
      const result = {
        response: false,
        msg: error?.response ? error?.response?.data?.message : "Network Error",
      };
      return result;
    });
  return result;
};

///laod form responses
const axiosLoadResponses = async (formId) => {
  const result = await axios
    .get(`${BASE_URL}/form/responses/` + formId)
    .then((res) => {
      const data = res?.data;
      return {
        response: true,
        msg: res?.data?.message,
        data: data,
      };
    })
    .catch((error) => {
      console.log(error?.response);
      const result = {
        response: false,
        msg: error?.response ? error?.response?.data?.message : "Network Error",
      };
      return result;
    });
  return result;
};

const axiosSupportMessage = async (data) => {
  const result = await axios
    .post(`${BASE_URL}/support`, data)
    .then((res) => {
      return {
        response: true,
        msg: res?.data?.message,
      };
    })
    .catch((error) => {
      console.log(error?.response);
      const result = {
        response: false,
        msg: error?.response ? error?.response?.data?.message : "Network Error",
      };
      return result;
    });
  return result;
};

export {
  axiosSingUp,
  axiosVerifyEmail,
  axiosResetPassword,
  axiosUpdatePassword,
  axiosSupportMessage,
  axiosLogin,
  axiosCreateForm,
  axiosDeleteForm,
  axiosLoadAllForms,
  axiosLoadForm,
  axiosLoadResponses,
  axiosSubmitFormResponse,
  axiosResendVerificationLink,
};
