import NextImage from "common/components/NextImage";
import { HeadingText, Text, Heading } from "common/style";
import React from "react";
import styled from "styled-components";
//  icon
import circle from "../../../public/images/circles.svg";

const TitleContainer = styled.div`
  background: white;
  padding-top: 100px;
  padding-bottom: 40px;
  position: relative;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PopularTopicsStyles = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: center;
  gap: 20px;
  .topic__box {
    cursor: pointer;
    width: 232px;
    height: 152px;
    background: rgba(192, 118, 84, 0.2);
    border-radius: 16px;
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 20px;
    padding: 0 15px;
    flex-direction: column;
    -webkit-transition: 0.5s;
    &:hover {
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
      cursor: pointer;
    }
  }
  .pri {
    background: rgba(88, 50, 218, 0.2);
  }
  h6 {
    font-weight: 600;
    font-size: 20px;
    color: #c07654;
  }
  .unique {
    color: #5832da;
  }
`;

const PopularTopics = () => {
  return (
    <>
      <TitleContainer className="container ptb-100">
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

      <PopularTopicsStyles className="pb-100">
        {/* TODO: Build out the actual components */}
        <div className="topic__box">
          <div className="icon">
            <NextImage src={circle} />
          </div>
          <h6>Productivity</h6>
        </div>
        <div className="topic__box pri">
          <div className="icon">
            <NextImage src={circle} />
          </div>
          <h6 className="unique">Productivity</h6>
        </div>
        <div className="topic__box">
          <div className="icon">
            <NextImage src={circle} />
          </div>
          <h6>Productivity</h6>
        </div>
        <div className="topic__box pri">
          <div className="icon">
            <NextImage src={circle} />
          </div>
          <h6 className="unique">Productivity</h6>
        </div>
        <div className="topic__box">
          <div className="icon">
            <NextImage src={circle} />
          </div>
          <h6>Productivity</h6>
        </div>
        <div className="topic__box pri">
          <div className="icon">
            <NextImage src={circle} />
          </div>
          <h6 className="unique">Productivity</h6>
        </div>
      </PopularTopicsStyles>
    </>
  );
};

export default PopularTopics;
