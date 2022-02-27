import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

const Wrapper = styled(Stack)`
  .MuiChip-root {
    color: white;
    font-size: 14px;
    width: 124px;
    background: #12355b;
    border-radius: 48px;
  }
`;

export default function SecondaryChip({ title }) {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Wrapper direction="row" spacing={1}>
      <Chip label={title} onClick={handleClick} />
    </Wrapper>
  );
}
