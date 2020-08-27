import { useState, useEffect, useRef, useContext } from "react";
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

//contexts
import {UserContext} from "../../contexts/UserContext";

function Form({ setOnboard }) {

  const {user} = useContext(UserContext);
  console.log(user);


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
      business: user.business ,
      industry: user.industry,
      location: user.location,
      years: user.years,
      hasSite: user.hasSite,
      website: user.website,
      achievements: user.achievements,
      goals: user.goals,
      challenges: user.challenges,
      motivation: user.motivation,
    }, 
    true,
    user
  );

  useEffect(() => {
    
  },[user])

  switch (step) {
    case 1:
      return (
        <div>
        <BusinessDetails
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          setStep={setStep}
        />
        </div>
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
