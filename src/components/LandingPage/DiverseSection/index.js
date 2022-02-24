import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import DiverseCard from "../../../common/components/MuiCard";
import { Heading, HeadingText, Text } from "common/style";
import GlideCarousel from "common/components/GlideCarousel";
import { InDemandJobsData } from "common/data/landingPageData";
import GlideSlide from "common/components/GlideCarousel/glideSlide";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardStyles } from "common/components/MuiCard/MuiCard.styles";
import { NextButton, PrevButton } from "../InDemandJob/InDemand.styles";

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
  .glide__controls {
    padding: 10px;

    /* @media (max-width: 767px) {
      top: -60px;
      left: 0;
      right: auto;
    }
    @media (max-width: 575px) {
      left: 50%;
      transform: translateX(-50%);
    } */
  }
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DiverseSection = () => {
  const carouselOptions = {
    type: "carousel",
    autoplay: 4000,
    perView: 3,
    gap: 30,
    animationDuration: 800,
    breakpoints: {
      990: {
        perView: 3,
      },
      767: {
        perView: 2,
      },
      500: {
        perView: 1,
      },
    },
  };
  return (
    <ContainerStyle className="container">
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
      <GlideCarousel
        carouselSelector="awards-carousel"
        options={carouselOptions}
        prevButton={
          <PrevButton>
            <span />
          </PrevButton>
        }
        nextButton={
          <NextButton>
            <span />
          </NextButton>
        }
      >
        {InDemandJobsData.map((item) => (
          <GlideSlide key={item.id}>
            <CardStyles>
              <Card sx={{ width: 400 }} className={item.bg}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={item.image}
                />
                <CardContent>
                  <Button className="pill-button">{item.button}</Button>

                  <Typography variant="h5" color="text.secondary">
                    {item.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <div className="left-wrapper">
                    <p>{item.stats}</p>
                    <img src="./images/adoptionImage.svg" alt="image" />
                  </div>
                  <Button size="small" className="apply-btn default-btn">
                    {item.callToAction} <i class="ri-arrow-right-s-line"></i>
                  </Button>
                </CardActions>
              </Card>
            </CardStyles>
          </GlideSlide>
        ))}
      </GlideCarousel>
    </ContainerStyle>
  );
};

export default DiverseSection;
