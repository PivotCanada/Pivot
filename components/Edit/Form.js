import { useState, useEffect, useRef, useContext } from "react";
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
  } = useForm(
    {
      firstname: user.firstname,
      lastname: user.lastname,
      business: user.business,
      industry: user.industry,
      location: user.location,
      industry: user.industry,
      years: user.years,
      hasSite: user.hasSite,
      website: user.website,
      achievements: user.achievements,
      goals: user.goals,
      challenges: user.challenges,
      wish: user.wish,
    },
    () => {}
  );

  switch (step) {
    case 1:
      return (
        <UserCredentials
          values={values}
          handleChange={handleChange}
          errors={errors}
          handleErrors={handleErrors}
          setStep={setStep}
        />
      );
    case 2:
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
    case 3:
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
    case 4:
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
    case 5:
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
    case 6:
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
    case 7:
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
    case 8:
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
    case 9:
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
    case 10:
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
    case 11:
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
