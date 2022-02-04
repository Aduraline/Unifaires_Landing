import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import NextImage from "common/components/NextImage";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import { Heading, HeadingText, Text } from "common/style";

const options = {
  loop: true,
  margin: 0,
  nav: true,
  mouseDrag: true,
  dots: true,
  autoplay: true,
  smartSpeed: 500,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>",
  ],

  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    800: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

const ContainerStyle = styled.div`
  background: white;
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Flex = styled.div`
  @media screen and (max-width: 768px) {
  }
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  min-height: 540px;
  margin-right: 10px;
  @media screen and (max-width: 768px) and (min-height: 400px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 480px) {
  }
`;

const Box = styled.div`
  min-width: 370px;
  min-height: 336px;
  @media screen and (max-width: 768px) {
    width: 384px;
  }
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0.75)
    ),
    linear-gradient(141.54deg, #faf8d4 7.01%, #d49fbf 96.64%);

  border-radius: 24px;
  margin-right: 30px;
  -webkit-transition: 0.5s;
  &:hover {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
    cursor: pointer;
  }
`;
const BoxTwo = styled(Box)`
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0.75)
    ),
    linear-gradient(141.54deg, #d8e262 7.01%, #2c4663 96.64%);
  -webkit-transition: 0.5s;
  &:hover {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
    cursor: pointer;
  }
`;
const BoxThree = styled(Box)`
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0.75)
    ),
    linear-gradient(141.54deg, #d4faea 7.01%, #b79fd4 96.64%);
  -webkit-transition: 0.5s;
  &:hover {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
    cursor: pointer;
  }
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  max-width: 384px;
  padding: 10px 24px 0 24px;
`;
const BoxHeader = styled.p`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: rgba(88, 50, 218, 1);
`;

const BoxText = styled.p`
  font-size: 16px;
  line-height: 150%;
  color: #808080;
  opacity: 0.9;
`;
const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 384px;
  padding: 24px;
  gap: 10px;
`;
const LeftInnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
const Button = styled.button`
  border: none;
  width: 220px;
  height: 48px;
  background: #5832da;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const AdoptionText = styled.p`
  font-size: 13px;
  color: #12355b;
`;
const BoxButton = styled.button`
  width: 152px;
  height: 32px;
  background: #12355b;
  border-radius: 30px;
  border: none;
  color: white;
  margin-bottom: 10px;
`;

const DiverseSection = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
  }, []);

  return (
    <ContainerStyle className=" pt-30 container">
      <HeadingText>A diverse selection of courses</HeadingText>
      <Fade up delay={100}>
        <FlexContainer>
          <Heading>
            From Philosophy to Anthropology, Data Science and everything
            in-between; <br /> we have the right courses you need to 10x your
            career.
          </Heading>

          <Text>
            See all <i class="ri-arrow-right-s-line"></i>
          </Text>
        </FlexContainer>
      </Fade>

      <div className="trending-slider   pt-45">
        {display ? (
          <OwlCarousel {...options}>
            <FlexBox>
              <Box>
                <Flex>
                  <img src="./images/cardone.svg" alt="image" />
                </Flex>
                <InnerWrapper>
                  <BoxButton>Oxford University</BoxButton>
                  <BoxHeader> Philosophy and Theology</BoxHeader>
                  <BoxText>
                    Philosophy and Theology brings together some of the most
                    important approaches to understanding and assessing the
                    intellectual claims of religion.
                  </BoxText>
                </InnerWrapper>
                <BottomWrapper>
                  <LeftInnerWrapper>
                    <AdoptionText>5K+ Registered</AdoptionText>
                    <img src="/images/adoptionImage.svg" alt="image" />
                  </LeftInnerWrapper>
                  <Button className="default-btn">
                    Enroll Now - 5€<i class="ri-arrow-right-s-line"></i>
                  </Button>
                </BottomWrapper>
              </Box>
            </FlexBox>

            <FlexBox>
              <BoxTwo>
                <Flex>
                  <img src="./images/cardtwo.svg" alt="image" />
                </Flex>
                <InnerWrapper>
                  <BoxButton>Oxford University</BoxButton>
                  <BoxHeader>Data Science for IoT</BoxHeader>
                  <BoxText>
                    Philosophy and Theology brings together some of the most
                    important approaches to understanding and assessing the
                    intellectual claims of religion.
                  </BoxText>
                </InnerWrapper>
                <BottomWrapper>
                  <LeftInnerWrapper>
                    <AdoptionText>5K+ Registered</AdoptionText>
                    <img src="/images/adoptionImage.svg" alt="image" />
                  </LeftInnerWrapper>
                  <Button className="default-btn">
                    Enroll Now - 5€<i class="ri-arrow-right-s-line"></i>
                  </Button>
                </BottomWrapper>
              </BoxTwo>
            </FlexBox>

            <FlexBox>
              <BoxThree>
                <Flex>
                  <img src="./images/cardthree.svg" alt="image" />
                </Flex>
                <InnerWrapper>
                  <BoxButton>Sewanee University</BoxButton>
                  <BoxHeader> Anthropology in the 21st Century</BoxHeader>
                  <BoxText>
                    Examine human-environmental relationships from the
                    anthropological perspective considering theoretical
                    approaches and practical applications will be supplemented.
                  </BoxText>
                </InnerWrapper>
                <BottomWrapper>
                  <LeftInnerWrapper>
                    <AdoptionText>5K+ Registered</AdoptionText>
                    <img src="/images/adoptionImage.svg" alt="image" />
                  </LeftInnerWrapper>
                  <Button className="default-btn">
                    Enroll Now - 5€ <i class="ri-arrow-right-s-line"></i>
                  </Button>
                </BottomWrapper>
              </BoxThree>
            </FlexBox>

            <FlexBox>
              <BoxThree>
                <Flex>
                  <img src="./images/cardthree.svg" alt="image" />
                </Flex>
                <InnerWrapper>
                  <BoxButton>Sewanee University</BoxButton>
                  <BoxHeader> Anthropology in the 21st Century</BoxHeader>
                  <BoxText>
                    Examine human-environmental relationships from the
                    anthropological perspective considering theoretical
                    approaches and practical applications will be supplemented.
                  </BoxText>
                </InnerWrapper>
                <BottomWrapper>
                  <LeftInnerWrapper>
                    <AdoptionText>5K+ Registered</AdoptionText>
                    <img src="/images/adoptionImage.svg" alt="image" />
                  </LeftInnerWrapper>
                  <Button className="default-btn">
                    Enroll Now - 5€ <i class="ri-arrow-right-s-line"></i>
                  </Button>
                </BottomWrapper>
              </BoxThree>
            </FlexBox>
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>
    </ContainerStyle>
  );
};

export default DiverseSection;
