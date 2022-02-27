import { Box, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

// const dataSignup = [
//   {
//     value: "singleUser",
//     label: "Single User",
//   },
//   {
//     value: "businessPartner",
//     label: "Business Partner",
//   },
// ];
export default function DropDownMui({ dataSignup, label }) {
  const [data, setData] = useState("");

  const handleChange = (event) => {
    setData(event.target.value);
  };
  return (
    <TextField
      fullWidth
      id="outlined-select-currency"
      select
      label={label}
      value={data}
      onChange={handleChange}
    >
      {dataSignup.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
