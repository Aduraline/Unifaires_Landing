import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 20px;
`;

const Box = styled.div`
  min-width: 384px;
  min-height: 336px;
  @media (max-width: 1024px) {
    min-width: 280px;
    min-height: 280px;
  }

  @media (max-width: 800px) {
    min-width: 384px;
    min-height: 336px;
  }
  @media (max-width: 480px) {
    min-width: 300px;
    min-height: 300px;
  }

  background: rgba(88, 50, 218, 0.05);
  border-radius: 24px;
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
  padding-right: 2px;
`;
const BoxText = styled.p`
  font-size: 16px;
  line-height: 150%;
  color: #808080;
  opacity: 0.9;
`;

export default function BoxArea({
  title,
  desc,
  leftImage,
  rightImage,
  quantity,
}) {
  return (
    <Box>
      <Flex>
        <img src={leftImage} alt="image" />
        <img src={rightImage} alt="image" />
      </Flex>
      <InnerWrapper>
        <BoxHeader>
          <SpanStyle>{quantity}</SpanStyle>
          {title}
        </BoxHeader>
        <BoxSubheader>Courses</BoxSubheader>
        <BoxText>{desc}</BoxText>
      </InnerWrapper>
    </Box>
  );
}
