import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import SignInRadio from "common/components/Radio";
import DatePickerField from "common/components/DatePicker";
import DropDownMui from "common/components/DropDownMui";
import { LoadingButton } from "@mui/lab";
import {
  languages,
  industries,
  degreeLevels,
  occupationAreas,
  careerSubjects,
  country,
  city,
  countryCode,
  genderData,
} from "common/data/signupData";
import styled from "styled-components";
import CheckboxMui from "common/components/CheckBoxMui";
import Link from "next/link";

const FormStyles = styled.form`
  .sign_wrapper {
    display: flex;
    gap: 20px;

    .left_section {
      width: 100%;

      .flex_wrapper {
        display: flex;
        gap: 20px;
      }
    }
    .right_section {
      width: 100%;
    }
  }

  .Mui-focused.MuiInputLabel-root {
    color: #5832da;
    font-weight: 600;
  }
  .MuiInputLabel-root {
    font-weight: 600;
  }

  .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: rgba(88, 50, 218, 0.5);
  }

  .MuiLoadingButton-root {
    background: #5832da;
    height: 48px;

    border-radius: 6px;
    font-weight: 600;
  }

  .button_wrapper {
    display: flex;
  }

  .account {
    padding-top: 10px;

    a {
      color: #5832da;
    }
  }
`;

export default function SignUpForm() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    confirmPassword: "",
    weight: "",
    weightRange: "",
    showPassword: false,
    showConfirmedPassword: false,
  });

  const [userType, setUserType] = React.useState("Day");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowPassword2 = () => {
    setValues({
      ...values,
      showConfirmedPassword: !values.showConfirmedPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <FormStyles>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}></Stack>
      <div className="sign_wrapper">
        <div className="left_section">
          <Stack spacing={2}>
            <TextField
              fullWidth
              color="success"
              label="First name"

              // {...getFieldProps("firstName")}
              // error={Boolean(touched.firstName && errors.firstName)}
              // helperText={touched.firstName && errors.firstName}
            />
            <DatePickerField />

            <div className="flex_wrapper">
              <DropDownMui dataSignup={countryCode} label="Country Code" />
              <TextField
                fullWidth
                id="outlined-number"
                label="Enter Mobile"
                type="number"
              />
            </div>
            <DropDownMui dataSignup={country} label="Choose Country" />
            <div className="flex_wrapper">
              <TextField
                fullWidth
                label="Postal Code"
                // {...getFieldProps("firstName")}
                // error={Boolean(touched.firstName && errors.firstName)}
                // helperText={touched.firstName && errors.firstName}
              />
              <DropDownMui dataSignup={city} label="Choose City" />
            </div>

            <DropDownMui dataSignup={city} label="Choose State" />

            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                width={500}
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            {/* confirm password */}
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                width={500}
                id="outlined-adornment-password"
                type={values.showConfirmedPassword ? "text" : "password"}
                value={values.confirmPassword}
                onChange={handleChange("confirmPassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword2}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showConfirmedPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Stack>
        </div>

        {/* Right section */}
        <div className="right_section">
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Last name"
              // {...getFieldProps("lastName")}
              // error={Boolean(touched.lastName && errors.lastName)}
              // helperText={touched.lastName && errors.lastName}
            />
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email address"
              // {...getFieldProps("email")}
              // error={Boolean(touched.email && errors.email)}
              // helperText={touched.email && errors.email}
            />

            <SignInRadio title="Gender" radioData={genderData} />
            <DropDownMui dataSignup={languages} label="Choose Language" />

            <DropDownMui dataSignup={industries} label="Choose Industry" />

            <DropDownMui
              dataSignup={degreeLevels}
              label="Choose Highest Degree Level"
            />

            <DropDownMui
              dataSignup={occupationAreas}
              label="Occupational Area "
            />

            <DropDownMui dataSignup={careerSubjects} label="Career Subject" />
          </Stack>
        </div>
      </div>
      <CheckboxMui label="sasasa" />
      <div className="button_wrapper">
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={false}
        >
          Sign Up
        </LoadingButton>
      </div>

      {/* <h6>
        <Link href="/login">Register to become our channel partner &nbsp;</Link>
      </h6> */}

      <h6 className="account">
        Already have an account? &nbsp;
        <Link href="/login">Login</Link>
      </h6>
    </FormStyles>
  );
}
