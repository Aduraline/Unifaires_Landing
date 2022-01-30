import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const SectionWrapper = styled.section`
  padding: 50px 0;
  background-color: rgba(127, 17, 224, 0.05);
  font-family: "DM Sans", sans-serif !important;
  @media only screen and (max-width: 1366px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 0;
  }
`;
export const ContactArea = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 700px;
  margin: 0px auto 0 auto;
  display: flex;

  /* background-color: #ffffff; */
  @media only screen and (max-width: 667px) {
    overflow: hidden;
    /* margin-bottom: -40px;
    width: calc(100% + 60px);
    margin-left: -30px; */
  }
  @media only screen and (max-width: 480px) {
    /* width: calc(100% + 40px);
    margin-left: -20px; */
  }
`;

export const ContactAreaLeft = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-right: 5%;
  /* padding-bottom: 150px; */

  .contact_heading_div {
  }
  h5 {
    color: #5832da;
    font-size: 48px;
    line-height: 45px;
  }
  .sub_slogan {
    color: rgba(88, 50, 218, 0.5);
  }
  p {
    font-size: 20px;
    color: #12355b;
    opacity: 0.5;
    line-height: 150%;
  }
  .socials_div {
    /* margin-top: 50; */
  }
  .socials_div img {
    padding: 0 25px 0 0;
    transition: all 0.3s ease-in-out;
  }
  .socials_div img:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;

export const ContactAreaRight = styled.div`
  width: 45%;
  height: 100%;
  margin: 50px auto 0 auto;
`;

export const ContactCard = styled.div`
  max-width: 608px;
  height: 640px;
  padding: 20px;
  border-radius: 24px;
  box-shadow: 0 6px 50px ${themeGet("colors.shadow", "rgba(38, 78, 118, 0.1)")};
  background-color: #f7f5fd;
  padding: 50px;
  h5 {
    color: #5832da;
    font-size: 28px;
    line-height: 36px;
    margin: 28px 0;
  }
  .card_footer {
    display: flex;
    flex-direction: column;
    height: 40px;
    color: #12355b;
  }
  .card_footer p {
    opacity: 0.8;
  }
  .card_footer:first-of-type {
    margin-top: 50px;
  }
  /* AUTH PAGE */
  .auth_footer {
    flex-direction: row;
    justify-content: flex-start;
    height: 30px;
  }
  .auth_footer:first-of-type {
    /* margin-top: 80px; */
  }
  .auth_footer a {
    padding-left: 5px;
    color: #5832da;
    font-weight: bold;
    letter-spacing: 0.5;
    font-family: Basier Circle;
  }
  a:hover {
    cursor: pointer;
    color: #5832da;
  }
`;

export const CardFormRow = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #5832da;
  margin-bottom: 15px;
  .row_col,
  .col {
    display: flex;
    flex-direction: column;
  }
  .row_col {
    width: 48%;
  }
  .col {
    width: 100%;
  }
  label {
    padding: 5px 0;
    color: #12355b;
    opacity: 0.8;
  }
  input,
  .col input,
  .col textarea {
    height: 32px;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #12355b;
    opacity: 0.2;
  }
  button {
    background-color: #5832da;
    border-radius: 6px;
    outline: none;
    border: none;
    width: 100%;
    height: 48px;
    margin-top: 40px;
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }
  button:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export default SectionWrapper;
