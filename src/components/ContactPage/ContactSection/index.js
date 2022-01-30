// Contact Section Index
import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../../globalApp.style';
import SectionWrapper, {
    ContactArea,ContactAreaLeft,ContactAreaRight,ContactCard,CardFormRow
} from '../contactcard.style.js';

import crown from 'common/assets/images/crown.svg';
import facebook from 'common/assets/images/socials/facebook.svg';
import instagram from 'common/assets/images/socials/instagram.svg'
import twitter from 'common/assets/images/socials/twitter.svg'
import youtube from 'common/assets/images/socials/youtube.svg'

import { contactCard } from 'common/data/appData';

const ContactSection = () => {
  const { slogan, title, description, heading, logo} = contactCard;
  const [state, setState] = useState({
  });
  
  const handleContactChange = () => {
  };

  const handleContactSubmit = async (e) => {
      e.preventDefault();
  };

  return (
    <SectionWrapper id="contact_page_section">
      <ContactArea>
          <ContactAreaLeft>
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
          <ContactAreaRight>
              <ContactCard>
                <Heading  as="h5" content={heading} />
                <form className="contact_form" onSubmit={handleContactSubmit}>
                    <CardFormRow>
                        <div className="row_col">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" required />
                        </div>
                        <div className="row_col">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" required /> 
                        </div>

                    </CardFormRow>
                    <CardFormRow>
                    <div className="col">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" required />  
                    </div>                    
                    </CardFormRow>
                    <CardFormRow>
                    <div className="col">
                    <label htmlFor="number">Phone Number</label>
                    <input type="email" name="email" required />  
                    </div>                    
                    </CardFormRow>
                    <CardFormRow>
                    <div className="col">
                    <label htmlFor="message">Message</label>
                    <textarea type="email" name="message" required />  
                    </div>   
                    </CardFormRow>

                    <CardFormRow>
                        <button type="submit">Send Message</button>
                    </CardFormRow>                     
                </form>
                <CardFormRow className="card_footer">
                    <p>Our Email Address</p>
                    <a>info@unifaires.com</a>
                </CardFormRow>
              </ContactCard>
          </ContactAreaRight>
      </ContactArea>
    </SectionWrapper>
  );
};

export default ContactSection;
