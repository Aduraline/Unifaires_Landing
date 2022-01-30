// Sign Up Step One Section Index
import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../../../globalApp.style';
import {ContactAreaLeft,ContactAreaRight,CardFormRow} from '../../../ContactPage/contactcard.style';
import SectionWrapper, {BackgroundArea, SignUpCard, AuthCardCol} from '../../auth.style';
import { signup } from 'common/data/appData';

const BusinessStepOne = () => {
  const { heading} = signup;
  const [state, setState] = useState({
  });
  
  const handleContactChange = () => {
  };

  const handleContactSubmit = async (e) => {
      e.preventDefault();
  };

  return (
    <SignUpCard className="signup_card">
    <Heading  as="h5" content={heading} />
    <CardFormRow className="selection_row">
    <label htmlFor="signup_type">As and</label>
    <select name="signup_type" className="selection_box">
        <option value="business" defaultValue>Business</option>
        <option value="individual">Individual</option>
    </select>
    </CardFormRow>                
    <form className="contact_form" onSubmit={handleContactSubmit}>
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
            <label htmlFor="companyname">Company Name</label>
            <input type="text" name="companyname" required />  
            </div> 
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
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required />  
            </div>                             
            </AuthCardCol>
            <AuthCardCol>
            <div className="col">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name="password" required />  
            </div>                             
            </AuthCardCol>        </CardFormRow> 
        <CardFormRow>
            <button type="submit">Proceed</button>
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

export default BusinessStepOne;
