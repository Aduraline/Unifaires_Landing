// Sign Up Step One Section Index
import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../globalApp.style';
import {ContactAreaLeft,ContactAreaRight,CardFormRow} from '../ContactPage/contactcard.style';
import SectionWrapper, {BackgroundArea, SignUpCard, AuthCardCol} from './auth.style';

import facebook from 'common/assets/images/socials/facebook.svg';
import instagram from 'common/assets/images/socials/instagram.svg'
import twitter from 'common/assets/images/socials/twitter.svg'
import youtube from 'common/assets/images/socials/youtube.svg'

import { signup } from 'common/data/appData';

const AuthWrapper = (props) => {
  const { slogan, title, description, heading, logo} = signup;
  const [state, setState] = useState({
  });
  
  const handleContactChange = () => {
  };

  const handleContactSubmit = async (e) => {
      e.preventDefault();
  };

  return (
    <SectionWrapper id="contact_page_section">
      <BackgroundArea>
          <ContactAreaLeft className="auth_bg_left">
              <div className="logo_area" >
                <img src={logo?.src} alt="Unifaires" /> 
              </div>              
              <div className="contact_heading_div">
                <Heading className="slogan"  as="h5" content={slogan} />
                <Heading className="sub_slogan"  as="h5" content={title} />
                <Text as="p" content={description} />
              </div>

              <div className="socials_div" >
                <img src={facebook?.src} alt="Facebook" /> 
                <img src={twitter?.src} alt="Twitter" /> 
                <img src={instagram?.src} alt="Instagram" /> 
                <img src={youtube?.src} alt="YouTube" /> 
              </div>
          </ContactAreaLeft>
          <ContactAreaRight className="auth_bg_right">
            {props.content}
          </ContactAreaRight>
      </BackgroundArea>
    </SectionWrapper>
  );
};

export default AuthWrapper;
