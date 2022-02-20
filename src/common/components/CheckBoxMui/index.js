import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";
import Link from "next/link";

const CheckboxMuiStyles = styled.div`
  .Mui-checked {
    color: #5832da !important;
  }
  .MuiLabel-root {
    display: none;
  }
  .MuiTypography-root {
    font-size: 14px;
    font-weight: 600;
    color: rgba(88, 50, 218, 0.5);
  }
`;

export default function CheckboxMui() {
  const label = `I agree to the Unifaires
    Terms of use and Privacy Policy`;
  return (
    <CheckboxMuiStyles>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label={label} />
      </FormGroup>
    </CheckboxMuiStyles>
  );
}
