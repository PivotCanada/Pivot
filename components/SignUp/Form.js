// Hooks
import { useForm } from "../../hooks/useForm";
// Contexts
import UserCredentials from "./UserCredentials";

const Form = () => {
  const {
    errors,
    values,
    handleChange,
    handleDirectChange,
    handleErrors,
  } = useForm(
    {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      consent: false,
    },
    () => {}
  );

  return (
    <UserCredentials
      values={values}
      handleChange={handleChange}
      handleDirectChange={handleDirectChange}
      errors={errors}
      handleErrors={handleErrors}
    />
  );
};

export default Form;
