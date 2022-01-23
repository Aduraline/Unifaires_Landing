import React from "react";
import SectionWrapper from "./faq.style";
import styled from "styled-components";
import NextImage from "common/components/NextImage";

import Instructor from "../../../public/images/instructor.svg";
import Ratings from "../../../public/images/ratings.svg";
import OnlineSvg from "../../../public/images/OnlineSvg.svg";
import Adoption from "../../../public/images/adoptionImage.svg";
import { Heading, HeadingText, Text } from "common/style";

const ContainerStyle = styled.div`
  background: white;
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: -100px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 150px;
  @media (max-width: 1024px) {
    gap: 20px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const LeftInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const RightInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Box = styled.div`
  min-width: 384px;
  background: rgba(88, 50, 218, 0.05);
  border-radius: 24px;
  @media (max-width: 1024px) {
    min-width: 300px;
  }
  -webkit-transition: 0.5s;
  &:hover {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    cursor: pointer;
  }
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  max-width: 384px;
  /* top | right | bottom | left */
  padding: 20px 24px 0 24px;
`;
const FooterWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 384px;
  padding: 10px 24px 24px 24px;
`;
const BoxHeader = styled.p`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: rgba(88, 50, 218, 1);
`;

const BoxText = styled.p`
  font-size: 14px;
  color: #808080;
  opacity: 0.9;
`;
const RatingSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: -100px;
`;
const RatingHeader = styled.p`
  font-weight: bold;
  font-size: 40px;
  align-text: center;
  color: #12355b;
`;
const BoxRightText = styled(BoxText)`
  font-size: 14px;
  color: #12355b;
`;
const PopularInstructurs = () => {
  return (
    <SectionWrapper>
      <ContainerStyle className=" pb-100 container">
        <HeadingText>Popular Instructors</HeadingText>
        <FlexContainer>
          <>
            <Heading>
              The people that are making the most impact on Unifaires at the
              moment
            </Heading>
          </>
          <Text>
            See all <i class="ri-arrow-right-s-line"></i>
          </Text>
        </FlexContainer>
        <Wrapper>
          <Box>
            <Flex>
              <NextImage src={Instructor} alt="image" />
              <RatingSection>
                <RatingHeader> 4.6</RatingHeader>
                <NextImage src={Ratings} alt="image" />
              </RatingSection>
            </Flex>
            <InnerWrapper>
              <BoxHeader> Simon Mudessar</BoxHeader>
              <BoxText>
                Teaches Construction Estimation, AutoCAD, Structural support
              </BoxText>
            </InnerWrapper>
            <FooterWrapper>
              <LeftInnerWrapper>
                <NextImage src={OnlineSvg} alt="image" />
                <BoxText> 12 Courses</BoxText>
              </LeftInnerWrapper>
              {/* right */}
              <RightInnerWrapper>
                <NextImage src={Adoption} alt="image" />
                <BoxRightText> 4.5K+ Registered</BoxRightText>
              </RightInnerWrapper>
            </FooterWrapper>
          </Box>
          <Box>
            <Flex>
              <NextImage src={Instructor} alt="image" />
              <RatingSection>
                <RatingHeader> 4.6</RatingHeader>
                <NextImage src={Ratings} alt="image" />
              </RatingSection>
            </Flex>
            <InnerWrapper>
              <BoxHeader> Simon Mudessar</BoxHeader>
              <BoxText>
                Teaches Construction Estimation, AutoCAD, Structural support
              </BoxText>
            </InnerWrapper>
            <FooterWrapper>
              <LeftInnerWrapper>
                <NextImage src={OnlineSvg} alt="image" />
                <BoxText> 12 Courses</BoxText>
              </LeftInnerWrapper>
              {/* right */}
              <RightInnerWrapper>
                <NextImage src={Adoption} alt="image" />
                <BoxRightText> 4.5K+ Registered</BoxRightText>
              </RightInnerWrapper>
            </FooterWrapper>
          </Box>
          <Box>
            <Flex>
              <NextImage src={Instructor} alt="image" />
              <RatingSection>
                <RatingHeader> 4.6</RatingHeader>
                <NextImage src={Ratings} alt="image" />
              </RatingSection>
            </Flex>
            <InnerWrapper>
              <BoxHeader>Simon Mudessar</BoxHeader>

              <BoxText>
                Teaches Construction Estimation, AutoCAD, Structural support
              </BoxText>
            </InnerWrapper>
            <FooterWrapper>
              <LeftInnerWrapper>
                <NextImage src={OnlineSvg} alt="image" />
                <BoxText> 12 Courses</BoxText>
              </LeftInnerWrapper>
              {/* right */}
              <RightInnerWrapper>
                <NextImage src={Adoption} alt="image" />
                <BoxRightText> 4.5K+ Registered</BoxRightText>
              </RightInnerWrapper>
            </FooterWrapper>
          </Box>
        </Wrapper>
      </ContainerStyle>
    </SectionWrapper>
  );
};

export default PopularInstructurs;
