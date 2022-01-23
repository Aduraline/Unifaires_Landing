import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const ColoredText = styled.span``;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 800px;
  z-index: 3;
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
`;

const Heading = styled.h1`
@media screen and (max-width: 480px) {
  font-size: 32px;
  padding: 20px;
  
}
`

const Banner = () => {
  return (
    <div className="banner-area-two">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="banner-content-two">
              <FlexContainer>
                <Fade up delay={100}>
                  <Heading>
                    Find affordable <ColoredText>Learning</ColoredText>{" "}
                    Resources
                    </Heading>
                </Fade>
                <div className="banner-btn">
                  <Fade left delay={200}>
                    <Button>Get in Touch</Button>
                  </Fade>
                </div>
              </FlexContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
