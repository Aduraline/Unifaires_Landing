
import { HeadingText, Text, Heading } from "common/style";
import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  background: white;
  padding-top: 100px;
  padding-bottom: 0px;
  position: relative;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  margin-top: 40px;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 1px;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 100px;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 1px;
`;
const Box = styled.div`
  min-width: 384px;
  min-height: 336px;
  background: rgba(88, 50, 218, 0.05);
  border-radius: 24px;
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  max-width: 384px;
  min-height: 300px;
  padding: 24px;
`;
const BoxHeader = styled.p`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: rgba(88, 50, 218, 1);
`;
const BoxSubheader = styled(BoxHeader)`
  color: #b8bcca;
  opacity: 0.5;
`;
const SpanStyle = styled(BoxHeader)`
  color: #12355b;
`;
const BoxText = styled.p`
  font-size: 16px;
  line-height: 150%;
  color: #808080;
  opacity: 0.9;
`;
const TopicButton = styled.button`
  min-width: 240px;
  height: 60px;
  background: rgba(254, 185, 95, 0.2);
  border-radius: 104px;
  border: none;
  font-weight: 600;
`;
const TopicButton2 = styled(TopicButton)`
  background: rgba(18, 53, 91, 0.2);
  border-radius: 104px;
  font-weight: 600;
`;

const PopularTopics = () => {
  return (
    <>
      <TitleContainer className="container">
        <HeadingText>Popular Topics</HeadingText>
        <FlexContainer>
          <>
            <Heading>
              The topics that are making the most impact on Unifaires at the
              moment
            </Heading>
          </>
          <Text>
            See all <i class="ri-arrow-right-s-line"></i>
          </Text>
        </FlexContainer>
      </TitleContainer>
      <TopWrapper>
        <TopicButton>Product Design</TopicButton>
        <TopicButton2>Productivity</TopicButton2>
        <TopicButton>Product Design</TopicButton>
        <TopicButton2>Productivity</TopicButton2>
        <TopicButton>Product Design</TopicButton>
      </TopWrapper>
      <BottomWrapper>
        <TopicButton2>Productivity</TopicButton2>
        <TopicButton>Product Design</TopicButton>
        <TopicButton2>Productivity</TopicButton2>
        <TopicButton>Product Design</TopicButton>
        <TopicButton2>Productivity</TopicButton2>
      </BottomWrapper>
    </>
  );
};

export default PopularTopics;
