export const initialState = [];
const FormReducers = (state = initialState, action) => {
  if (action.type === "FORM") {
    return [...state, action.payload];
  }
  return state;
};

export default FormReducers;
