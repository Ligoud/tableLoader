export const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};
export function inputReducer(state, action) {
  switch (action.type) {
    case "id":
      return { ...state, id: action.payload };
    case "firstName":
      return { ...state, firstName: action.payload };
    case "lastName":
      return { ...state, lastname: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "phone":
      return { ...state, phone: action.payload };
    default:
      break;
  }
}
