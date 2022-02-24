import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { CardStyles } from "./MuiCard.styles";

export default function ImgMediaCard({
  image,
  title,
  desc,
  bg,
  button,
  callToAction,
  stats,
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
            <p>{stats}</p>
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
