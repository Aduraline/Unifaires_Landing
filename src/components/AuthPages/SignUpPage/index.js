import React, { useState } from 'react';
import Link from 'next/link';

import { signup } from 'common/data/appData';

import IndividualStepOne  from '../SignUpPage/IndividualStepOne';
import IndividualStepTwo  from '../SignUpPage/IndividualStepTwo';
import BusinessStepOne from './BusinessStepOne';
import BusinessStepTwo from './BusinessStepTwo';


const SignUpPage = () => {
  const { slogan, title, description, heading, logo} = signup;
  // const [, setSignupDetails] = useState({})
  const [individual, setIndividual] = useState()
  const [business, setBusiness] = useState()
  

  const handleSignUpType = (e) => {
    e.preventDefault();
    
    if(e.target.value === "individual"){
      setIndividual(true)
      setBusiness(false)
    }else if(e.target.value === "business"){
      setBusiness(true)
      setIndividual(false)
    }

    // return {...state, signUpType:type}
  }
  const handleSteps = (e) => {
    e.preventDefault();
    // let currentStep = state.currentStep;
    // currentStep = currentStep === 1 ? 2 : 1
    // setState(() => {
    //   return 
    // }{currentStep:currentStep}, () => console.log("Next", state))   
    // // const nextStep = (steps) => {
 
    // // }
  }

  console.log(individual, business)
 if(business){
    return(<BusinessStepOne handleBusiness={handleSignUpType}/>);
  } else {
    return(<IndividualStepOne handleSignUpType={handleSignUpType}/>);
  }
  // return (
  //   <>
  //     {
  //       individual === true? 
  //       <IndividualStepOne handleSignUpType={handleSignUpType}/>
  //       : business &&
  //       <BusinessStepOne handleBusiness={handleSignUpType}/>
  //     }
  //   </>
  // );
}
export default SignUpPage;
