import { useState, useEffect, useRef, useContext } from "react";
import { useForm } from "../../hooks/useForm";
import Submit from "./Submit";
import UserConsent from "./UserConsent";
// Contexts
import { UserContext } from "../../contexts/UserContext";

// import UserLocation from "./UserLocation";
// import UserTags from "./UserTags";

function Form() {
  // const [tags, setTags] = useState([]);
  const { user } = useContext(UserContext);
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
  } = useForm(() => {});

  switch (step) {
    case 1:
      return (
        <UserConsent
          handleChange={handleChange}
          errors={errors}
          handleErrors={handleErrors}
          setStep={setStep}
        />
      );
    case 2:
      return <Submit submitting={submitting} setSubmitting={setSubmitting} />;
  }
}

export default Form;
