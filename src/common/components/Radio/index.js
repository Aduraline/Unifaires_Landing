import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import styled from "styled-components";

const RadioStyles = styled.div`
  .Mui-checked {
    color: #5832da;
  }
`;

export default function SignInRadio({ title, radioData }) {
  console.log(title, radioData, "ypppp");
  return (
    <RadioStyles>
      <FormControl>
        <h6>{title}</h6>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          {radioData?.map((item) => (
            <FormControlLabel
              key={item.id}
              value={item.value}
              control={<Radio />}
              label={item.label}
            />
          ))}
          {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
        </RadioGroup>
      </FormControl>
    </RadioStyles>
  );
}
