// Sign Up Step One Section Index
import React, { useState } from "react";
import Link from "next/link";
import Text from "components/Layout/Text";
import Heading from "components/Layout/Heading";
import { SectionHeader } from "../../../globalApp.style";
import {
  ContactAreaLeft,
  ContactAreaRight,
  CardFormRow,
} from "../../../ContactPage/contactcard.style";
import SectionWrapper, {
  BackgroundArea,
  SignUpCard,
  AuthCardCol,
} from "../../auth.style";

import facebook from "common/assets/images/socials/facebook.svg";
import instagram from "common/assets/images/socials/instagram.svg";
import twitter from "common/assets/images/socials/twitter.svg";
import youtube from "common/assets/images/socials/youtube.svg";

import { signup } from "common/data/appData";

const IndividualStepTwo = () => {
  const { slogan, title, description, heading, logo } = signup;
  const [state, setState] = useState({});

  const handleContactChange = () => {};

  const handleContactSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <SignUpCard className="signup_card">
      <Heading as="h5" content={heading} />
      <CardFormRow className="selection_row">
        <label htmlFor="signup_type">As and</label>
        <select name="signup_type" className="selection_box">
          <option value="individual" defaultValue>
            Individual
          </option>
          <option value="business">Business</option>
        </select>
      </CardFormRow>
      <form className="contact_form" onSubmit={handleContactSubmit}>
        <CardFormRow>
          <AuthCardCol>
            <div className="col">
              <label htmlFor="gender">Gender</label>
              <input type="text" name="fname" required />
            </div>
          </AuthCardCol>
          <AuthCardCol>
            <div className="col">
              <label htmlFor="lname">Location</label>
              <input type="text" name="lname" required />
            </div>
          </AuthCardCol>
        </CardFormRow>
        <CardFormRow>
          <AuthCardCol>
            <div className="col">
              <label htmlFor="email">Postal Code</label>
              <input type="email" name="email" required />
            </div>
          </AuthCardCol>
          <AuthCardCol>
            <div className="col">
              <label htmlFor="phoneno">Language</label>
              <input type="number" name="phoneno" required />
            </div>
          </AuthCardCol>
        </CardFormRow>
        <CardFormRow>
          <AuthCardCol>
            <div className="col">
              <label htmlFor="email">Industry</label>
              <input type="password" name="password" required />
            </div>
          </AuthCardCol>
          <AuthCardCol>
            <div className="col">
              <label htmlFor="email">Degree Level</label>
              <input type="password" name="password" required />
            </div>
          </AuthCardCol>
        </CardFormRow>
        <CardFormRow>
          <button type="submit">Complete Signup</button>
        </CardFormRow>
      </form>
      <CardFormRow className="auth_footer card_footer">
        <input type="checkbox" name="terms" value="false" />
        <p>
          I agree to the <span>Unifaires Terms of use and Privacy Policy</span>
        </p>
      </CardFormRow>
      <CardFormRow className="auth_footer card_footer">
        <p>Already have an account?</p>
        <a> Sign in</a>
      </CardFormRow>
    </SignUpCard>
  );
};

export default IndividualStepTwo;
