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
import { signup } from "common/data/appData";

const BusinessStepTwo = () => {
  const { heading } = signup;
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
          <option value="business" defaultValue>
            Business
          </option>
          <option value="individual">Individual</option>
        </select>
      </CardFormRow>
      <form className="contact_form" onSubmit={handleContactSubmit}>
        <CardFormRow>
          <AuthCardCol>
            <div className="col">
              <label htmlFor="phoneno">Phone Number</label>
              <input type="number" name="phoneno" required />
            </div>
          </AuthCardCol>
          <AuthCardCol>
            <div className="col">
              <label htmlFor="lname">Country</label>
              <input type="text" name="lname" required />
            </div>
          </AuthCardCol>
        </CardFormRow>
        <CardFormRow>
          <AuthCardCol>
            <div className="col">
              <label htmlFor="companyname">Role</label>
              <input type="text" name="companyname" required />
            </div>
          </AuthCardCol>
          <AuthCardCol>
            <div className="col">
              <label htmlFor="businessType">Business Type</label>
              <input type="text" name="businessType" required />
            </div>
          </AuthCardCol>
        </CardFormRow>
        <CardFormRow>
          <div className="col">
            <label htmlFor="domain">Domain</label>
            <input type="text" name="domain" required />
          </div>
        </CardFormRow>

        <CardFormRow>
          <button type="submit">Proceed</button>
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

export default BusinessStepTwo;
