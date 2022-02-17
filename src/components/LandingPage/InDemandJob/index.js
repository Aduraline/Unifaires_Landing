import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import Fade from "react-reveal/Fade";
import JobCard from "../../../common/components/MuiCard";
import { Heading, HeadingText, Text } from "common/style";

const ContainerStyle = styled.div`
  background: white;
  .in_demand {
    display: flex;
    gap: 30px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 100px; /* Remove scrollbar space */
      background: transparent; /* Optional: just make scrollbar invisible */
    }
  }
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChooseUs = () => {
  return (
    <ContainerStyle className="container ptb-100">
      <HeadingText>In-Demand Jobs</HeadingText>
      <FlexContainer>
        <Heading>
          We are committed to your growth by linking your learning with the jobs
          that matter to you.
        </Heading>

        <Text>
          See all <i class="ri-arrow-right-s-line"></i>
        </Text>
      </FlexContainer>
      {/* TODO: redo the dammm section */}
      <div className="in_demand ">
        <JobCard
          image="./images/job1.svg"
          title="Philosophy and Theology"
          button="Meta"
          desc=" Philosophy and Theology brings together some of the most
        important approaches to understanding and assessing the
        intellectual claims of religion."
          bg="left"
          callToAction="Apply Now"
          stats="42 Applicants"
        />

        <JobCard
          image="./images/job2.svg"
          title="Data Science for IoT"
          button="Google"
          desc=" Philosophy and Theology brings together some of the most
        important approaches to understanding and assessing the
        intellectual claims of religion."
          bg="center"
          callToAction="Apply Now"
          stats="4 Applicants"
        />

        <JobCard
          image="./images/cardthree.svg"
          title="Anthropology in the 21st Century"
          button="IBM"
          desc="Examine human-environmental relationships from the
        anthropological perspective considering theoretical approaches
        and practical applications will be supplemented."
          bg="right"
          callToAction="Apply Now"
          stats="242 Applicants"
        />
        <JobCard
          image="./images/cardthree.svg"
          title="Anthropology in the 21st Century"
          button="IBM"
          desc="Examine human-environmental relationships from the
        anthropological perspective considering theoretical approaches
        and practical applications will be supplemented."
          bg="right"
          callToAction="Apply Now"
          stats="420 Applicants"
        />
        <JobCard
          image="./images/cardthree.svg"
          title="Anthropology in the 21st Century"
          button="IBM"
          desc="Examine human-environmental relationships from the
        anthropological perspective considering theoretical approaches
        and practical applications will be supplemented."
          bg="right"
          callToAction="Apply Now"
          stats="402 Applicants"
        />
      </div>
    </ContainerStyle>
  );
};

export default ChooseUs;
