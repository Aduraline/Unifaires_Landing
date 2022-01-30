import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../../globalApp.style';
import {ContactAreaLeft,ContactAreaRight, ContactCard,CardFormRow} from '../../ContactPage/contactcard.style';
import SectionWrapper, {BackgroundArea, SignUpCard, AuthCardCol} from '../auth.style';
import { login } from 'common/data/appData';

const ResetPasswordCard = () => {
  const {resetHeading, resetDescription} = login;
  const [state, setState] = useState({
  });
  
  const handleContactChange = () => {
  };

  const handleContactSubmit = async (e) => {
      e.preventDefault();
  };

  return (
    <ContactCard className="auth_card forgot_card">
    <Heading  as="h5" content={resetHeading} />  
    <Text as="p" content={resetDescription} />
    <form className="contact_form" onSubmit={handleContactSubmit}>           
        <CardFormRow>
            <div className="col">
            <label htmlFor="newPassword">New Password</label>
            <input type="password" name="newPassword" required />  
            </div>                     
        </CardFormRow>
        <CardFormRow>
            <div className="col">
            <label htmlFor="confirmNewPassword">Confirm New Password</label>
            <input type="password" name="confirmNewPassword" required />  
            </div>   
        </CardFormRow>
        <CardFormRow>
            <button type="submit">Save Password</button>
        </CardFormRow>                     
    </form>
    <CardFormRow className="auth_footer card_footer">
        <p>Remember your password?</p>
        <Link href="/login"> Login here</Link>
    </CardFormRow>
    </ContactCard>
  );
};

export default ResetPasswordCard;
