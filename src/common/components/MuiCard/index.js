import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const CardStyles = styled.div`
  .left {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.75),
        rgba(255, 255, 255, 0.75)
      ),
      linear-gradient(141.54deg, #faf8d4 7.01%, #d49fbf 96.64%);
  }
  .center {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.75),
        rgba(255, 255, 255, 0.75)
      ),
      linear-gradient(141.54deg, #d8e262 7.01%, #2c4663 96.64%) !important;
  }
  .right {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.75),
        rgba(255, 255, 255, 0.75)
      ),
      linear-gradient(141.54deg, #d4faea 7.01%, #b79fd4 96.64%) !important;
  }
  .MuiCard-root {
    /* border: 1px solid red; */
    box-shadow: none;
    border-radius: 32px;
    margin-top: 64px;

    .pill-button {
      min-width: 152px;
      height: 32px;
      background: #12355b;
      border-radius: 30px;
      border: none;
      color: white;
      padding: 0 8px 0 8px;
      margin-bottom: 10px;
      font-size: 16px;
      text-transform: capitalize;
    }
    .apply-btn {
      border: none;
      width: 220px;
      height: 48px;
      background: #5832da;
      border-radius: 8px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    h5 {
      font-size: 23px;
      font-weight: bold;
      color: #000000;
      padding-top: 16px;
      padding-bottom: 16px;
    }
    p {
      font-size: 16px;
      color: #808080;
      opacity: 0.9;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .MuiCardActions-root {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 384px;
      padding: 24px;
      gap: 10px;
    }
  }
`;

export default function ImgMediaCard({
  image,
  title,
  desc,
  bg,
  button,
  callToAction,
}) {
  return (
    <CardStyles>
      <Card sx={{ width: 400 }} className={bg}>
        <CardMedia component="img" alt="green iguana" image={image} />
        <CardContent>
          <Button className="pill-button">{button}</Button>

          <Typography variant="h5" color="text.secondary">
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
        <CardActions>
          <div className="left-wrapper">
            <p>40 Applicants</p>
            <img src="./images/adoptionImage.svg" alt="image" />
          </div>
          <Button size="small" className="apply-btn default-btn">
            {callToAction} <i class="ri-arrow-right-s-line"></i>
          </Button>
        </CardActions>
      </Card>
    </CardStyles>
  );
}
