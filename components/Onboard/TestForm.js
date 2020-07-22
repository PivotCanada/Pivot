import { useState, useEffect, useRef } from "react";
import { useForm } from "../../hooks/useForm";
import Submit from "./Submit";
import UserConsent from "./UserConsent";
import UserCredentials from "./UserCredentials";
import BusinessDetails from "./BusinessDetails";
import BusinessIndustry from "./BusinessIndustry";
import BusinessWebsite from "./BusinessWebsite";
import BusinessLocation from "./BusinessLocation";
import Goals from "./Goals";
import Achievements from "./Achievements";
import Challenges from "./Challenges";
import Wish from "./Wish";
import Review from "./Review";
import ProfileImage from "./ProfileImage";

function Form() {
  // const [tags, setTags] = useState([]);
  const {
    errors,
    values,
    step,
    submitting,
    setStep,
    setSubmitting,
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

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <UserCredentials
      values={values}
      handleChange={handleChange}
      handleDirectChange={handleDirectChange}
      errors={errors}
      handleErrors={handleErrors}
    />
  );
}

export default Form;
