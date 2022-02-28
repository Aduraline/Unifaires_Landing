import NextImage from "common/components/NextImage";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
// icon
import degreeImage from "../../../../public/images/degreecard.svg";
import time from "../../../../public/images/time.svg";
import dollar from "../../../../public/images/Dollar.svg";
import DrawerUiSignUp from "../DrawerMui";
import { Button } from "@mui/material";

const CardStyles = styled.div`
  width: 400px;
  height: 560px;
  background: rgba(88, 50, 218, 0.05);
  border-radius: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .card__image {
    margin-top: -10px;
  }

  .wrapper {
    padding: 0 15px;

    .tag-wrapper {
      display: flex;
      align-items: baseline;
      gap: 40px;
      margin-top: -20px;
      p {
        font-weight: bold;
        font-size: 24px;
        color: #000000;
      }
      button {
        width: 100px;
        height: 28px;
        border: none;
        background: #c07654;
        border-radius: 48px;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
      }
    }

    header {
      font-weight: bold;
      font-size: 20px;
      color: #5832da;
      padding-bottom: 10px;
      -webkit-transition: 0.5s;
      &:hover {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
        cursor: pointer;
      }
    }
    .desc {
      font-size: 14px;
      color: #4d4d4d;
      padding-bottom: 20px;
    }
    .duration-wrapper {
      display: flex;
      gap: 40px;
      align-items: center;
      padding-bottom: 20px;

      .weeks {
        display: flex;
        align-items: center;
        gap: 15px;
        p {
          font-size: 14px;
          line-height: 150%;
          color: #12355b;
          font-weight: 500;
        }
      }
      .price {
        display: flex;
        align-items: center;
        gap: 15px;
        p {
          font-size: 14px;
          line-height: 150%;
          color: #12355b;
          font-weight: 500;
        }
      }
    }
  }

  button {
    width: 360px;
    height: 48px;
    background: #5832da;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    -webkit-transition: 0.5s;
    text-transform: capitalize;
    &:hover {
      background: #5832da;
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
      cursor: pointer;
    }
  }
`;

export default function DegreeCard() {
  // Sign In logics

  const isSignIn = true;
  return (
    <>
      <CardStyles>
        <div className="card__image">
          <NextImage src={degreeImage} width={370} />
        </div>
        <div className="wrapper">
          <div className="tag-wrapper">
            <p>IBM</p>
            <button>New</button>
          </div>

          <header>
            First Steps in Creating Meaningful Designs for Best Practices
          </header>

          <div className="desc">
            First steps in creating meaningful designs for best practices First
            steps in creating meaningful designs for best practices First steps
            in creating meaningful designs for best practices
          </div>

          <div className="duration-wrapper">
            <div className="weeks">
              <NextImage src={time} />
              <p>4 weeks</p>
            </div>
            <div className="price">
              <NextImage src={dollar} />
              <p>$50</p>
            </div>
          </div>
        </div>
        {isSignIn ? (
          <Link href="/course/7377373883">
            <Button>Find out more</Button>
          </Link>
        ) : (
          <DrawerUiSignUp />
        )}
      </CardStyles>
    </>
  );
}
