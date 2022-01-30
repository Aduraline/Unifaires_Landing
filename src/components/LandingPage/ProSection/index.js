import React from "react";
import styled from "styled-components";
import NextImage from "common/components/NextImage";
// Icons
import PlayIcon from "../../../public/images/play.svg";
import StarIcons from "../../../public/images/star.svg";
import CircleIcon from "../../../public/images/circle.svg";

const ContainerStyle = styled.div`
  min-height: 312px;
  background: rgba(184, 188, 202, 0.1);
  display: flex;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const InnerLeftWapper = styled.div`
  display: flex;
  align-content: center;
  gap: 20px;
`;
const InnerCenterWapper = styled.div`
  display: flex;
  align-content: center;
  gap: 20px;
`;
const InnerRightWapper = styled.div`
  display: flex;
  align-content: center;
  gap: 20px;
`;

const Text = styled.p`
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #12355b;
  opacity: 0.9;
`;
const TextCenter = styled(Text)`
  color: rgba(192, 118, 84, 1);
`;
const TextRight = styled(Text)`
  color: rgba(88, 50, 218, 1);
`;

const Icon = styled.img`
  padding: 10px;
`;

const ProSection = () => {
  return (
    <ContainerStyle className="ptb-100">
      <FlexContainer className="container">
        <InnerLeftWapper>
          <NextImage src={PlayIcon} alt="image" />
          <Text>
            Learn in-demand skills with and <br /> endless pool of video courses
          </Text>
        </InnerLeftWapper>
        <InnerCenterWapper>
          <NextImage src={StarIcons} alt="image" />
          <TextCenter>
            Choose courses taught by real-
            <br />
            world experts
          </TextCenter>
        </InnerCenterWapper>
        <InnerRightWapper>
          <NextImage src={CircleIcon} alt="image" />
          <TextRight>
            Learn at your own pace, with lifetime <br /> access on mobile and
            desktop
          </TextRight>
        </InnerRightWapper>
      </FlexContainer>
    </ContainerStyle>
  );
};

export default ProSection;
