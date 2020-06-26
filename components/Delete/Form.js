// Components
import Submit from "./Submit";
import UserConsent from "./UserConsent";
// Hooks
import { useForm } from "../../hooks/useForm";

const Form = ({ handleClose }) => {
  const { step, submitting, setStep, setSubmitting } = useForm(() => {});

  switch (step) {
    case 1:
      return <UserConsent handleClose={handleClose} setStep={setStep} />;
    case 2:
      return <Submit submitting={submitting} setSubmitting={setSubmitting} />;
  }
};

export default Form;
