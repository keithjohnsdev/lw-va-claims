import WalkthroughHeader from "../Shared/WalkthroughHeader";
import Walkthrough1 from "./Walkthrough1";
import Walkthrough2 from "./Walkthrough2";
import Walkthrough3 from "./Walkthrough3";
import Walkthrough4 from "./Walkthrough4";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VAWalkthrough = (props) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [progressPercent, setProgressPercent] = useState(5);
  const [formValues, setFormValues] = useState({
    fName: "",
    lName: "",
    dob: "",
    ssn: "",
    healthIns: "",
    veteranStatus: "",
    relation: "",
    branch: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    console.log(formValues);
  }

  function nextStep(e) {
    e.preventDefault();
    setProgressPercent(progressPercent + 5);
    setStep(step + 1);
  }

  function previousStep(e) {
    e.preventDefault();
    setProgressPercent(progressPercent - 5);
    setStep(step - 1);
  }

  function handleChangeSSN(e) {
    const { name, value } = e.target;
    const ssn = value.replace(/[^\d]/g, "");
    const ssnLength = ssn.length;

    if (ssnLength < 4);
    setFormValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

    if (ssnLength < 6) {
      setFormValues((prevState) => {
        return {
          ...prevState,
          [name]: `${ssn.slice(0, 3)}-${ssn.slice(3)}`,
        };
      });
    }
    setFormValues((prevState) => {
      return {
        ...prevState,
        [name]: `${ssn.slice(0, 3)}-${ssn.slice(3, 5)}-${ssn.slice(5, 9)}`,
      };
    });
  }

  useEffect(() => {
    if (step <= 0) {
      navigate("/dashboard");
    }
  }, [step]);

  return (
    <div className="walkthrough-page">
      <WalkthroughHeader
        progressPercent={progressPercent}
        onClick={previousStep}
      />
      {step === 1 && (
        <Walkthrough1
          handleChange={handleChange}
          fName={formValues.fName}
          lName={formValues.lName}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Walkthrough2
          handleChange={handleChange}
          dob={formValues.dob}
          nextStep={nextStep}
        />
      )}
      {step === 3 && (
        <Walkthrough3
          handleChange={handleChangeSSN}
          ssn={formValues.ssn}
          nextStep={nextStep}
        />
      )}
      {step === 4 && (
        <Walkthrough4
          handleChange={handleChangeSSN}
          healthIns={formValues.healthIns}
          nextStep={nextStep}
        />
      )}
    </div>
  );
};

export default VAWalkthrough;
