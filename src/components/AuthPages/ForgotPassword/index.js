import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../../globalApp.style';
import {ContactAreaLeft,ContactAreaRight, ContactCard,CardFormRow} from '../../ContactPage/contactcard.style';
import SectionWrapper, {BackgroundArea, SignUpCard, AuthCardCol} from '../auth.style';
import { login } from 'common/data/appData';
import { useRouter } from 'next/router'
const ForgotPasswordCard = () => {
  const { forgotHeading, forgotDescription} = login;
  const router = useRouter();

  const [state, setState] = useState({
  });
  
  const handleForgotChange = () => {
  };

  const handleForgotSubmit = async (e) => {
      e.preventDefault();
      router.push("/reset")
  };

  return (
    <ContactCard className="auth_card forgot_card">
    <Heading  as="h5" content={forgotHeading} />  
    <Text as="p" content={forgotDescription} />
    <form className="contact_form" onSubmit={handleForgotSubmit}>           
        <CardFormRow>
        <div className="col">
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" />  
        </div>                    
        </CardFormRow>
        <CardFormRow>
            <button type="submit">Send Reset Link</button>
        </CardFormRow>                     
    </form>
    <CardFormRow className="auth_footer card_footer">
        <p>Remember your password?</p>
        <Link href="/login"> Login here</Link>
    </CardFormRow>
    </ContactCard>
  );
};

export default ForgotPasswordCard;
