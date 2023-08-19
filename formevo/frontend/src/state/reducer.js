export const initialState = {
  user: null,
  userName: null,
  forms: [],
};
const reducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_USER":
      newState = { ...newState, user: action.user };
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;
    case "SET_USERNAME":
      newState = { ...newState, userName: action.userName };
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;
    case "SET_FORMS":
      newState = { ...newState, forms: action.forms };
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};
export default reducer;
