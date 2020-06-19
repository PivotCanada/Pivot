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

// import UserLocation from "./UserLocation";
// import UserTags from "./UserTags";

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
      firstname: "",
      lastname: "",
      business: "",
      industry: "",
      location: "",
      industry: "",
      years: "",
      hasSite: true,
      role: "",
      website: "",
      achievements: "",
      goals: "",
      challenges: "",
      wish: "",
    },
    () => {}
  );

  switch (step) {
    case 1:
      return (
        <UserConsent
          values={values}
          handleChange={handleChange}
          errors={errors}
          handleErrors={handleErrors}
          setStep={setStep}
        />
      );
    case 2:
      return (
        <UserCredentials
          values={values}
          handleChange={handleChange}
          errors={errors}
          handleErrors={handleErrors}
          setStep={setStep}
        />
      );
    case 3:
      return (
        <BusinessDetails
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          step={step}
          setStep={setStep}
        />
      );
    case 4:
      return (
        <BusinessIndustry
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          step={step}
          setStep={setStep}
        />
      );
    case 5:
      return (
        <BusinessLocation
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          step={step}
          setStep={setStep}
        />
      );
    case 6:
      return (
        <BusinessWebsite
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          step={step}
          setStep={setStep}
        />
      );
    case 7:
      return (
        <Achievements
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          step={step}
          setStep={setStep}
        />
      );
    case 8:
      return (
        <Challenges
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          step={step}
          setStep={setStep}
        />
      );
    case 9:
      return (
        <Wish
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          step={step}
          setStep={setStep}
        />
      );
    case 10:
      return (
        <Goals
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          step={step}
          setStep={setStep}
        />
      );
    case 11:
      return (
        <Review
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          step={step}
          setStep={setStep}
        />
      );
    case 12:
      return (
        <Submit
          values={values}
          submitting={submitting}
          setSubmitting={setSubmitting}
        />
      );
  }
}

export default Form;
