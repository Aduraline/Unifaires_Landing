import React from "react";
import styled from "styled-components";
import Link from "next/link";

import {
  Box,
  Card,
  //  Link,
  Container,
  Typography,
  TextField,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import SignUpForm from "./SignUpForm";
import PartnerSignUp from "../PartnerSignUp";

const userTypes = [
  {
    value: "singleUser",
    label: "Single User",
  },
  {
    value: "businessPartner",
    label: "Business Partner",
  },
];

const SignPageStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  height: 100vh;

  .sign-in-banner {
    background-image: url("../images/bg-vector.png");
    position: relative;
    display: flex;
    align-items: flex-start !important;
    flex-direction: column;
    img {
      padding-left: 40px;
      padding-top: 120px;
    }
    h4 {
      padding-left: 40px;
      font-weight: bold;
      font-size: 48px;
      color: #5832da;
      padding-top: 104px;

      span {
        color: rgba(88, 50, 218, 0.5);
      }
    }

    .desc {
      p {
        padding-left: 40px;
        padding-right: 20px;
        color: rgba(18, 53, 91, 0.5);
        font-size: 20px;
        text-align: left;
      }
    }

    .social_wrapper {
    }
    .inner-bg {
      background-color: rgba(88, 50, 218, 0.05);
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  .sign-in-form {
    max-width: 480px;
    margin: auto;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    padding-right: 80px;
    padding-left: 80px;

    h5 {
      font-weight: bold;
      font-size: 36px;
      line-height: 36px;
      color: #5832da;
    }

    .Mui-focused.MuiInputLabel-root {
      color: #5832da;
      font-weight: 600;
    }
    .MuiInputLabel-root {
      font-weight: 600;
    }

    .Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: rgba(88, 50, 218, 0.5);
    }
    .MuiOutlinedInput-root {
      font-weight: 600;
      color: #5832da;
    }
  }
`;

export default function SignIn() {
  const [userType, setUserType] = React.useState("singleUser");

  const handleChange = (event) => {
    setUserType(event.target.value);
  };
  return (
    <SignPageStyles>
      <div className="sign-in-banner">
        <div className="inner-bg"></div>
        <img src="../images/logoUnifaires.svg" alt="" />
        <h4>
          {" "}
          Democratized <br />
          <span>Learning for all</span>
        </h4>
        <div className="desc">
          {userType === "singleUser" ? (
            <p>
              Unifaires is a good platform that emphasizes learning for all.{" "}
              <br /> lorem ipsum dolor sit amet consectuer
            </p>
          ) : (
            <p>
              Get to know Unifaires! Our product experts will guide you through
              the solution and answer any questions you have.
              <br />
              <br />
              <span>
                ✅Introduction to all product features
                <br />
                ✅ Tailored to your business priorities
                <br />
                ✅Answers to any questions you have
              </span>
            </p>
          )}
        </div>
        {/* FIXME: Fix this issue with positioning, make sure it doesn't change the margin or padding or rather stay on one place' */}
        <div className="social_wrapper">
          <img src="../images/socials/facebook.svg" alt="Facebook" />
          <img src="../images/socials/twitter.svg" alt="Twitter" />
          <img src="../images/socials/instagram.svg" alt="Instagram" />
          <img src="../images/socials/youtube.svg" alt="YouTube" />
        </div>
      </div>

      <div className="sign-in-form container">
        <Box sx={{ mb: 2, display: "flex", gap: 5, mt: 3 }}>
          <h5> Sign Up As</h5>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={userType}
            onChange={handleChange}
          >
            {userTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {userType === "singleUser" ? <SignUpForm /> : <PartnerSignUp />}
      </div>
    </SignPageStyles>
  );
}
