import React from "react";
import styled from "styled-components";

const DiverseCardStyles = styled.div`
  .center {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.75),
        rgba(255, 255, 255, 0.75)
      ),
      linear-gradient(141.54deg, #d8e262 7.01%, #2c4663 96.64%);
  }
  .right {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.75),
        rgba(255, 255, 255, 0.75)
      ),
      linear-gradient(141.54deg, #d4faea 7.01%, #b79fd4 96.64%);
  }
`;
const Box = styled.div`
  min-width: 400px;
  min-height: 500px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0.75)
    ),
    linear-gradient(141.54deg, #faf8d4 7.01%, #d49fbf 96.64%);
  border-radius: 32px;
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

function JobCard({ image, title, desc, bg, button }) {
  return (
    <DiverseCardStyles>
      <Box className={bg}>
        <img src={image} alt="image" />
        <InnerWrapper>
          <BoxButton>{button}</BoxButton>
          <BoxHeader> {title}</BoxHeader>
          <BoxText>{desc}</BoxText>
        </InnerWrapper>
        <BottomWrapper>
          <LeftInnerWrapper>
            <p>40 Applicants</p>
            <img src="./images/adoptionImage.svg" alt="image" />
          </LeftInnerWrapper>
          <Button className="default-btn">
            Apply Now <i class="ri-arrow-right-s-line"></i>
          </Button>
        </BottomWrapper>
      </Box>
    </DiverseCardStyles>
  );
}

export default JobCard;
