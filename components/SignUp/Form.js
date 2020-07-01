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

import Carousel from "../UI/Carousel/Main";
import Item from "../UI/Carousel/Item";

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
      password: "",
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

  return (
    <Carousel direction={"Y"}>
      <Item>
        <UserConsent
          values={values}
          handleChange={handleChange}
          errors={errors}
          handleErrors={handleErrors}
          setStep={setStep}
        />
      </Item>
      <Item>
        <UserCredentials
          values={values}
          handleChange={handleChange}
          errors={errors}
          handleErrors={handleErrors}
        />
      </Item>
      <Item>
        <BusinessDetails
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
        />
      </Item>
      <Item>
        <BusinessIndustry
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
        />
      </Item>
      <Item>
        <BusinessLocation
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
        />
      </Item>
      <Item>
        <BusinessWebsite
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          step={step}
          setStep={setStep}
        />
      </Item>
      <Item>
        <Goals
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          step={step}
          setStep={setStep}
        />
      </Item>
      <Item>
        <Challenges
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          step={step}
          setStep={setStep}
        />
      </Item>
      <Item>
        <Achievements
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          step={step}
          setStep={setStep}
        />
      </Item>
      <Item>
        <Wish
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          step={step}
          setStep={setStep}
        />
      </Item>
      <Item>
        <Review
          values={values}
          submitting={submitting}
          setSubmitting={setSubmitting}
        />
      </Item>
      <Item>
        <Submit
          values={values}
          submitting={submitting}
          setSubmitting={setSubmitting}
        />
      </Item>
    </Carousel>
  );
}

export default Form;
