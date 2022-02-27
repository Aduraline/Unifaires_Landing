import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import { Heading, HeadingText, Text } from "common/style";
import BoxArea from "./Box";

const ContainerStyle = styled.div`
  background: white;
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  margin-bottom: 40px;
  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  @media (max-width: 768px) {
    display: flex;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 0px; /* Remove scrollbar space */
      background: transparent; /* Optional: just make scrollbar invisible */
    }
  }
`;

const ExploreSection = () => {
  return (
    <ContainerStyle className=" ptb-100 container">
      <HeadingText>Explore 2,305 courses from various instructors</HeadingText>
      <FlexContainer>
        <>
          <Heading>
            Courses from 1,513 different institutions like IBM, Emory, and
            Harvard.
          </Heading>
        </>
        <Text>
          See all <i class="ri-arrow-right-s-line"></i>
        </Text>
      </FlexContainer>
      <Fade up delay={100}>
        <Wrapper>
          <BoxArea
            leftImage="../images/boxicon.svg"
            rightImage="../images/brands.svg"
            quantity="68"
            title="Project Management"
            desc=" Learn from top management firms like McKinsey & Company,
          Accenture, Deloitte and more"
          />

          <BoxArea
            leftImage="../images/boxicon.svg"
            rightImage="../images/brands.svg"
            quantity="183"
            title="Project Management"
            desc=" Learn from top management firms like McKinsey & Company,
          Accenture, Deloitte and more"
          />

          <BoxArea
            leftImage="../images/boxicon.svg"
            rightImage="../images/brands.svg"
            quantity="140"
            title="Project Management"
            desc=" Learn from top management firms like McKinsey & Company,
          Accenture, Deloitte and more"
          />

          <BoxArea
            leftImage="../images/boxicon.svg"
            rightImage="../images/brands.svg"
            quantity="140"
            title="Project Management"
            desc=" Learn from top management firms like McKinsey & Company,
          Accenture, Deloitte and more"
          />
          <BoxArea
            leftImage="../images/boxicon.svg"
            rightImage="../images/brands.svg"
            quantity="140"
            title="Project Management"
            desc=" Learn from top management firms like McKinsey & Company,
          Accenture, Deloitte and more"
          />
          <BoxArea
            leftImage="../images/boxicon.svg"
            rightImage="../images/brands.svg"
            quantity="140"
            title="Project Management"
            desc=" Learn from top management firms like McKinsey & Company,
          Accenture, Deloitte and more"
          />
        </Wrapper>
      </Fade>
    </ContainerStyle>
  );
};

export default ExploreSection;
