import { connect } from "react-redux";
import FormComponents from "../../components/FormComponents";
import FormActions from "../actions/FormActions";

const getMyState = (state) => {
  return state;
};
const FormContainer = connect(getMyState, { FormActions })(FormComponents);

export default FormContainer;
