export const FORM = "FORM";
const FormActions = (FirstName, MidleName, LastName) => {
  return {
    type: FORM,
    payload: {
      FirstName: FirstName,
      MidleName: MidleName,
      LastName: LastName,
    },
  };
};
export default FormActions;
