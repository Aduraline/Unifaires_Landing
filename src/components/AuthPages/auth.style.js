import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const SectionWrapper = styled.section`
  padding: 50px 0;
  background-color: rgba(127, 17, 224, 0.05);
  background: linear-gradient(
    to right,
    rgba(127, 17, 224, 0.05) 66.666666%,
    #5832da 33.333333%
  );
  font-family: "DM Sans", sans-serif !important;
  @media only screen and (max-width: 1366px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 0;
  }
`;

export const BackgroundArea = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 700px;
  margin: 0px auto 0 auto;
  display: flex;

  .auth_bg_left {
    width: 50%;
  }
  .auth_bg_right {
    width: 50%;
  }
  /* Login Card */
  .auth_card {
    height: 540px;
    margin: 0 150px 0 0;
  }
  .signup_card {
    height: 690px;
    margin-top: -45px;
  }
  .forgot_card p {
    font-family: Maison Neue;
    color: #12355b;
    opacity: 0.5;
  }
  .forgot_card .card_footer {
    /* margin-top: -15px; */
  }
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

export const SignUpCard = styled.div`
  margin: 0 150px 0 0;
  max-width: 608px;
  /* height: 640px; */
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
  .selection_row {
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    margin-top: -30px;
  }
  .selection_row label {
    line-height: 100%;
  }
  .selection_box {
    margin-left: 2.5px;
    height: 20px;
    background-color: transparent;
    outline: none;
    border: none;
    color: #5832da;
    font-size: 16px;
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
    height: 20px;
  }
  /* FOR THE SIGN UP PAGE */
  .auth_footer:nth-of-type(2) {
    margin-top: 70px;
    align-items: center;
  }
  .auth_footer:nth-of-type(2) input {
    height: 100%;
  }
  .auth_footer:nth-of-type(2) p {
    margin-left: 5px;
    font-size: 12px;
  }
  .auth_footer:nth-of-type(2) span {
    color: #5832da;
    font-weight: bold;
    opacity: 1;
  }
  .auth_footer:nth-of-type(3) p {
    padding-left: 10px;
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

export const AuthCardCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SectionWrapper;
