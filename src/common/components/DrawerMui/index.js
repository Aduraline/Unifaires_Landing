import * as React from "react";
import styled from "styled-components";
import Drawer from "@mui/material/Drawer";
import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { LoadingButton } from "@mui/lab";
import CheckboxMui from "../CheckBoxMui";
import Link from "next/link";
import { Button } from "reactstrap";

const FormMuiStyles = styled.div`
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
    text-transform: capitalize;
    border-radius: 6px;
    font-weight: 600;
    &:hover {
      background: #5832da;
    }
  }
  .muiLoading_secondary {
    background: rgba(184, 188, 202, 0.1);
    border: #5832da 1px solid;
    color: #5832da;
    &:hover {
      background: rgba(184, 188, 202, 0.1);
    }
  }
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 450px;
    box-shadow: 5px 0 10px 0 rgb(0 0 0 / 10%);
    padding: 48px;

    .MuiIconButton-root {
      margin-top: -20px;
      display: flex;
      align-self: start;
      border-radius: 999px;
      background: rgba(88, 50, 218, 0.09);
      color: #5832da;
      margin-bottom: 100px;
    }

    h6 {
      font-weight: 600;
      font-size: 1.6rem;
      padding-bottom: 15px;
      span {
        color: #5832da;
        font-weight: bold;
        font-size: 2rem;
      }
    }

    p {
      font-size: 14px;
      padding-top: 15px;
      text-align: center;
      font-weight: 500;
      a {
        color: rgba(184, 188, 202, 1);
      }
    }
  }
`;

const MuiLoadingButton = styled(LoadingButton)``;

// FIXME: Clean up the code!!
export default function DrawerUiSignUp() {
  const [state, setState] = React.useState({
    right: true,
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, ["right"]: open });
  };

  return (
    <>
      <StyledDrawer
        anchor={"right"}
        open={state["right"]}
        // onClose={toggleDrawer(false)}
      >
        <Link href="/categories">
          <IconButton
            aria-label="delete"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <CloseIcon />
          </IconButton>
        </Link>
        <h6>
          {" "}
          <span>Sign in</span> to avail exciting Education to your fingertips!
        </h6>
        {/* 3. Sign Form */}

        <FormMuiStyles action="">
          <Stack spacing={2}>
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email address"
              // {...getFieldProps("email")}
              // error={Boolean(touched.email && errors.email)}
              // helperText={touched.email && errors.email}
            />
            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              // {...getFieldProps("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              // error={Boolean(touched.password && errors.password)}
              // helperText={touched.password && errors.password}
            />

            <CheckboxMui label="Remember Me" />
            <MuiLoadingButton
              primary
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              // loading={isSubmitting}
            >
              Sign In
            </MuiLoadingButton>

            <MuiLoadingButton
              className="muiLoading_secondary"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              // loading={isSubmitting}
            >
              Create Account
            </MuiLoadingButton>
          </Stack>
        </FormMuiStyles>

        <p>
          <Link href="#!">
            By signing up, you agree to our Terms & Conditions and Privacy
            Policy
          </Link>
        </p>
      </StyledDrawer>
    </>
  );
}
