import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import { Heading, HeadingText, Text } from "common/style";
import DiverseCard from "./Card";

const ContainerStyle = styled.div`
  background: white;
  .diverse_section {
    display: flex;
    gap: 30px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 100px; /* Remove scrollbar space */
      background: transparent;
      /* Optional: just make scrollbar invisible */
    }
  }
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DiverseSection = () => {
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

      <div className="diverse_section   pt-45">
        <DiverseCard
          // TODO: add all the props
          title="Philosophy and Theology"
          image="./images/cardone.svg"
          desc=" Philosophy and Theology brings together some of the most important
        approaches to understanding and assessing the intellectual claims of
        religion."
          button="Oxford University"
        />

        <DiverseCard
          // TODO: add all the props
          title="Data Science for IoT"
          image="./images/cardtwo.svg"
          desc=" Philosophy and Theology brings together some of the most important
        approaches to understanding and assessing the intellectual claims of
        religion."
          bg="center"
          button="Oxford University"
        />

        <DiverseCard
          // TODO: add all the props
          title="Anthropology in the 21st Century"
          image="./images/cardthree.svg"
          desc="Examine human-environmental relationships from the
          anthropological perspective considering theoretical approaches
          and practical applications will be supplemented."
          bg="right"
          button="Sewanee University"
        />

        <DiverseCard
          // TODO: add all the props
          title="Anthropology in the 21st Century"
          image="./images/cardthree.svg"
          desc="Examine human-environmental relationships from the
          anthropological perspective considering theoretical approaches
          and practical applications will be supplemented."
          bg="right"
          button="Sewanee University"
        />
        <DiverseCard
          // TODO: add all the props
          title="Anthropology in the 21st Century"
          image="./images/cardthree.svg"
          desc="Examine human-environmental relationships from the
          anthropological perspective considering theoretical approaches
          and practical applications will be supplemented."
          bg="right"
          button="Sewanee University"
        />
      </div>
    </ContainerStyle>
  );
};

export default DiverseSection;
