// Sign Up Step One Section Index
import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import {CardFormRow} from '../../../ContactPage/contactcard.style';
import {SignUpCard, AuthCardCol} from '../../auth.style';
import { signup } from 'common/data/appData';

const IndividualStepOne = ({handleSignUpType}) => {
  const { slogan, title, description, heading, logo} = signup;

  return (
    <SignUpCard className="signup_card">
    <Heading  as="h5" content={heading} />
    <CardFormRow className="selection_row">
    <label htmlFor="signup_type">As and</label>
    <select onChange={handleSignUpType} name="signup_type" className="selection_box">
        <option value="individual">Individual</option>
        <option value="business">Business</option>
    </select>
    </CardFormRow>                
    <form className="contact_form">
        <CardFormRow>
            <AuthCardCol>
            <div className="col">
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" required />  
            </div>                      
            </AuthCardCol>
            <AuthCardCol>
            <div className="col">
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" required />  
            </div>                        
            </AuthCardCol>
        </CardFormRow>              
        <CardFormRow>
        <div className="col">
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" required />  
        </div>                    
        </CardFormRow>
        <CardFormRow>
            <AuthCardCol>
            <div className="col">
            <label htmlFor="phoneno">Phone Number</label>
            <input type="number" name="phoneno" required />  
            </div>  
            </AuthCardCol>
            <AuthCardCol>
            <div className="col">
            <label htmlFor="email">Password</label>
            <input type="password" name="password" required />  
            </div>                             
            </AuthCardCol>
        </CardFormRow> 
        <CardFormRow>
            <button type="button">Proceed</button>
        </CardFormRow>                     
    </form>
    <CardFormRow className="auth_footer card_footer">
        <input type="checkbox" name="terms" value="false"/>
        <p>I agree to the <span>Unifaires Terms of use and Privacy Policy</span></p>
    </CardFormRow>
    <CardFormRow className="auth_footer card_footer">
        <p>Already have an account?</p>
        <Link href="/login"> Login here</Link>
    </CardFormRow>
    </SignUpCard>
  );
};

export default IndividualStepOne;
