// Login Page Section Index
import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import {ContactCard,CardFormRow} from '../../ContactPage/contactcard.style.js';

import { login } from 'common/data/appData';

const LoginCard = () => {
  const { slogan, title, description, heading, logo} = login;
  const [state, setState] = useState({
  });
  
  const handleContactChange = () => {
  };

  const handleContactSubmit = async (e) => {
      e.preventDefault();
  };

  return (
    <ContactCard className="auth_card">
      <Heading  as="h5" content={heading} />
      <form className="contact_form" onSubmit={handleContactSubmit}>
          <CardFormRow>
          <div className="col">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" required />  
          </div>                    
          </CardFormRow>
          <CardFormRow>
          <div className="col">
          <label htmlFor="email">Password</label>
          <input type="password" name="password" required />  
          </div>                    
          </CardFormRow>
          <CardFormRow>
              <button type="submit">Complete Signup</button>
          </CardFormRow>                     
      </form>
      <CardFormRow className="auth_footer card_footer">
          <p>Don’t have an account?</p>
          <Link href="/signup"> Sign up </Link>
      </CardFormRow>
      <CardFormRow className="auth_footer card_footer">
          <p>Forgot your Password?</p>
          <Link href="/forgot" as="/forgot-password"> Reset it here</Link>
      </CardFormRow>
    </ContactCard>
  );
};

export default LoginCard;
