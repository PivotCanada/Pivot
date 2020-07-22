import { useState, useEffect, useRef } from "react";
import { useForm } from "../../hooks/useForm";
import BusinessDetails from "./BusinessDetails";
import BusinessIndustry from "./BusinessIndustry";
import BusinessWebsite from "./BusinessWebsite";
import BusinessLocation from "./BusinessLocation";
import ProfileImage from "./ProfileImage";
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
    },
    () => {}
  );

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
    case 6:
      return <Finish setOnboard={setOnboard} />;
  }
}

export default Form;
