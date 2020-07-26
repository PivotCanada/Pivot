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

import Carousel from "../UI/Carousel/Main";
import Item from "../UI/Carousel/Item";

const images = [
  "https://images.unsplash.com/photo-1594843863977-b72cf8e3855e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1978&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
  "https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1456154875099-97a3a56074d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
  "https://images.unsplash.com/photo-1522124624696-7ea32eb9592c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1501949997128-2fdb9f6428f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
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
      photo: {},
    },
    () => {}
  );

  useEffect(() => {
    console.log(values.photo);
  }, [values.photo]);

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
      {/* <Item image={images[1]}>
        <UserCredentials
          values={values}
          handleChange={handleChange}
          errors={errors}
          handleErrors={handleErrors}
        />
      </Item>
      <Item image={images[1]}>
        <ProfileImage
          values={values}
          handleChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
        />
      </Item> */}

      <Item image={images[2]}>
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
      <Item image={images[3]}>
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
      <Item image={images[4]}>
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
      {/* <Item image={images[5]}>
        <Wish
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          step={step}
          setStep={setStep}
        />
      </Item> */}
      {/* <Item image={images[2]}>
        <BusinessDetails
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
        />
      </Item> */}
      {/* <Item image={images[2]}>
        <BusinessIndustry
          values={values}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
        />
      </Item> */}
      {/* <Item image={images[3]}>
        <BusinessLocation
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
        />
      </Item> */}
      {/* <Item image={images[4]}>
        <BusinessWebsite
          values={values}
          handleChange={handleChange}
          handleDirectChange={handleDirectChange}
          errors={errors}
          handleErrors={handleErrors}
          step={step}
          setStep={setStep}
        />
      </Item> */}
      {/* <Item image={images[1]}>
        <UserCredentials
          values={values}
          handleChange={handleChange}
          errors={errors}
          handleErrors={handleErrors}
        />
      </Item> */}
      {/* <Item image={images[1]}>
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
      </Item> */}
      <Item image={images[6]}>
        <Review
          values={values}
          submitting={submitting}
          setSubmitting={setSubmitting}
        />
      </Item>
      <Item image={images[7]}>
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
