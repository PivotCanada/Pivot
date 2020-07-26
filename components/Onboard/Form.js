import { useState, useEffect, useRef } from "react";
import { useForm } from "../../hooks/useForm";
import BusinessDetails from "./BusinessDetails";
import BusinessIndustry from "./BusinessIndustry";
import BusinessWebsite from "./BusinessWebsite";
import BusinessLocation from "./BusinessLocation";
import BusinessMotivation from "./BusinessMotivation";
import ProfileImage from "./ProfileImage";
import Achievements from "./Achievements";
import Goals from "./Goals";
import Challanges from "./Challenges";
import Finish from "./Finish";

function Form({ setOnboard }) {
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
      business: "",
      industry: "",
      location: "",
      industry: "",
      years: "",
      hasSite: true,
      website: "",
      achievements: "",
      goals: "",
      challenges: "",
      motivation: "",
    },
    () => {}
  );

  useEffect(() => {
    console.log(values.motivation);
  }, [values.motivation]);

  switch (step) {
    case 1:
      return (
        <BusinessDetails
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          setStep={setStep}
        />
      );
    case 2:
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
    case 3:
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
    case 4:
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
    case 5:
      return (
        <BusinessMotivation
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
        <ProfileImage
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
    case 9:
      return (
        <Challanges
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
      return <Finish setOnboard={setOnboard} />;
  }
}

export default Form;
