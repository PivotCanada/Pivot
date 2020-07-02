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

const images = [
  "https://images.unsplash.com/photo-1506104489822-562ca25152fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
  "https://images.unsplash.com/photo-1533417457911-4ec911485388?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
  "https://images.unsplash.com/photo-1516293635722-a0ae2709d570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
  "https://images.unsplash.com/photo-1465964816819-88949ae78179?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80",
  "https://images.unsplash.com/photo-1559682468-a6a29e7d9517?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
];

const randomImage = () => {
  let index = Math.floor(Math.random() * 5);
  return images[index];
};

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
      <Item image={images[0]}>
        <UserConsent
          values={values}
          handleChange={handleChange}
          errors={errors}
          handleErrors={handleErrors}
          setStep={setStep}
        />
      </Item>
      <Item image={images[1]}>
        <UserCredentials
          values={values}
          handleChange={handleChange}
          errors={errors}
          handleErrors={handleErrors}
        />
      </Item>
      <Item image={images[2]}>
        <BusinessDetails
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
        />
      </Item>
      <Item image={images[2]}>
        <BusinessIndustry
          values={values}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
        />
      </Item>
      <Item image={images[3]}>
        <BusinessLocation
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
        />
      </Item>
      <Item image={images[4]}>
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
      <Item image={images[0]}>
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
      <Item image={images[1]}>
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
      <Item image={images[2]}>
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
      <Item image={images[3]}>
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
      <Item image={images[4]}>
        <Review
          values={values}
          submitting={submitting}
          setSubmitting={setSubmitting}
        />
      </Item>
      <Item image={images[0]}>
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
