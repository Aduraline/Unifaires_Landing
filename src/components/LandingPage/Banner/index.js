import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import Link from "next/link";

const ColoredText = styled.span``;

const BannerStyles = styled.div`
  height: 1200px;
  background-image: url("../images/hero.svg");
  background-position: contain;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: bold;
    font-size: 72px;
    line-height: 72px;
    display: flex;
    align-items: center;
    text-align: center;

    /* White */

    color: #ffffff;

    opacity: 0.9;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 800px;
  z-index: 3;
  @media screen and (max-width: 480px) {
    .banner-btn {
      margin-top: 50px;
    }
  }
`;

const Button = styled.button`
  font-weight: 600;
  display: inline-block;
  -webkit-box-align: center;
  -ms-flex-align: center;
  width: 308px;
  height: 60px;
  background: #ffffff;
  border-radius: 34px;
  color: #5832da;
  border: none;
  font-size: 20px;
  -webkit-transition: 0.5s;
  &:hover {
    background: #5832da;
    color: white;
    border: 1px solid white;
  }

  @media screen and (min-width: 480px) {
    margin-bottom: -100px;
  }
`;

const Banner = () => {
  return (
    <BannerStyles>
      <FlexContainer>
        <Fade up delay={100}>
          <h1>Find affordable Learning Resources</h1>
        </Fade>
        <div className="banner-btn">
          <Fade left delay={200}>
            <Link href="/contact">
              <Button>Get in Touch</Button>
            </Link>
          </Fade>
        </div>
      </FlexContainer>
    </BannerStyles>
  );
};

export default Banner;
