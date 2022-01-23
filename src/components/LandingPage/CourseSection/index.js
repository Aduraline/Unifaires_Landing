import React from "react";
import NextImage from "common/components/NextImage";
import styled from "styled-components";

// Icons
import CityImage from "../../../public/images/cities.svg";
import FindIcon from "../../../public/images/FindIcon.svg";
import MatchIcon from "../../../public/images/MatchIcon.svg";

const ContainerStyle = styled.div`
  background: rgba(184, 188, 202, 0.1);
`;

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
   
  }
`;
const InnerLeftWapper = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
`;
const InnerRightWapper = styled.div`
  display: flex;
  align-content: flex-end;
  flex-direction: column;
`;
const Heading = styled.p`
  font-weight: bold;
  font-size: 40px;
  display: flex;
  align-items: center;
  color: #000000;
  opacity: 0.9;
  @media screen and (max-width: 480px) {
    margin-top: 10px;
    font-size: 24px;
  }
`;
const HeadingText = styled.p`
  font-size: 22px;
  color: #000000;
  opacity: 0.9;
`;
const Text = styled.p`
  font-size: 16px;
  color: #12355b;
  opacity: 0.9;
`;

const ViewallLink = styled.a`
  font-size: 15px;
  display: flex;
  align-items: center;
  color: #5832da;
  opacity: 0.9;
  cursor: pointer;
  margin-right: 30px;
  -webkit-transition: 0.5s;
  &:hover {
    -webkit-transform: translateX(-5px);
    transform: translateX(-5px);
    cursor: pointer;
  }
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
const SecondaryButton = styled(Button)`
  background: white;
  border: #5832da solid 1px;
  font-weight: 600;
  color: #5832da;
  -webkit-transition: 0.5s;
  &:hover {
    background: #5832da;
    color: white;
    border: 1px solid white;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  padding-right: 50px;
  gap: 30px;
  margin-top: 20px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }

`;
const CourseWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: -50px;
  @media (max-width: 1200px) {
    margin-left: 0;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const TopWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    background: #ffffff;
    box-shadow: 0px 10px 40px -5px rgba(74, 42, 185, 0.12) !important;
    border-radius: 12px;
    padding: 20px;
  }
`;

const BottomWrapper = styled(TopWrapper)``;

const CourseSection = () => {
  return (
    <ContainerStyle>
      <FlexContainer className="container ptb-100">
        <InnerLeftWapper>
          <CourseWrapper>
            <NextImage src={CityImage} alt="image" />
            <Text>2,305+ Courses</Text>
          </CourseWrapper>
          <Heading>Find suitable learning courses</Heading>
          <Text>
            Unifaires helps people seeking to learn by providing them with
            multiple courses to learn form; across various industries and
            fields.
          </Text>
          <Text>
            We’ll never tell your current company or a third-party recruiter
            about your job search, we respect your privacy. And it’s completely
            free to search.
          </Text>
          <ButtonWrapper>
            <Button className="default-btn">
              Match Skills <i class="ri-arrow-right-s-line"></i>
            </Button>
            <SecondaryButton>
              Match Skills <i class="ri-arrow-right-s-line"></i>
            </SecondaryButton>
          </ButtonWrapper>
        </InnerLeftWapper>
        {/* <InnerCenterWapper>
          <NextImage src={FindIcon} alt="Find Icon" />
          <NextImage src={MatchIcon} alt="Match Icon" />
        </InnerCenterWapper> */}
        {/* right */}
        <InnerRightWapper>
          <TopWrapper>
            <HeaderWrapper>
              <NextImage src={FindIcon} width={40} alt="Find Icon" />
              <HeadingText>Find suitable learning courses</HeadingText>
            </HeaderWrapper>

            <Text>
              We’ll never tell your current company or a third-party recruiter
              about your job search, we respect your privacy. And it’s
              completely free to search.
            </Text>
            <ViewallLink>
              View all courses <i class="ri-arrow-right-s-line"></i>
            </ViewallLink>
          </TopWrapper>

          <BottomWrapper>
            <HeaderWrapper>
              <NextImage src={MatchIcon} width={40} alt="Match Icon" />
              <HeadingText>Match skills with our advanced AI </HeadingText>
            </HeaderWrapper>
            <Text>
              We’ll never tell your current company or a third-party recruiter
              about your job search, we respect your privacy. And it’s
              completely free to search.
            </Text>
            <ViewallLink>
              View all courses <i class="ri-arrow-right-s-line"></i>
            </ViewallLink>
          </BottomWrapper>
        </InnerRightWapper>
      </FlexContainer>
    </ContainerStyle>
  );
};

export default CourseSection;
