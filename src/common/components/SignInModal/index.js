import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import styled from "styled-components";
import Link from "next/link";
import ImageAvatars from "../AvatorMui";
import { Button, MenuItem, Stack, TextField } from "@mui/material";

const ModalStyles = styled.div`
  .MuiButton-root {
    background: #5832da;
    border-radius: 6px;
    font-weight: 600;
    color: white !important;
    text-transform: capitalize;
    /* padding: 14px 80px; */
  }
`;
const SignModalStyles = styled.div`
  .Mui-focused.MuiInputLabel-root {
    color: #12355b;
  }
  .MuiInputLabel-root {
    color: #12355b;
  }

  /* .Mui-focused .MuiInput-input {
    border: 1px solid red;
    border-bottom: 20px solid;
  } */

  .MuiInput-input {
    border-colo: yellow;
  }

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 0%;
  height: 80vh;
  width: 1000px;
  border-radius: 24px;
  background: #ffffff;
  border-radius: 24px;
  padding: 32px;

  .close_btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    margin-bottom: 48px;
  }
  .header-section {
    /* padding: 0 40px 0 40px; */
    text-align: center;

    header {
      font-weight: bold;
      font-size: 36px;
      color: #5832da;
    }
    p {
      margin-bottom: 48px;
    }
  }

  /* Inner-wrapper */
  .inner-wrapper {
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 20px;
    /* Form */
    .form {
      flex: 0.4;

      /* Phone number */
      .phone-no {
        display: flex;
        align-items: baseline;
        justify-content: center;
        gap: 10px;
      }
    }

    /* Footer Area */
  }
  .footer {
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 10px;
    padding-top: 100px;

    .MuiButton-root {
      background: #5832da;
      border-radius: 6px;
      font-weight: 600;
      text-transform: capitalize;
      padding: 14px 80px;
    }

    .profile {
      background: #eeeafb !important;
      color: #5832da;
    }

    .cancel {
      background: #ffdbe3 !important;
      color: #ff0c3e;
    }
  }
`;

const currencies = [
  {
    value: "+46",
    label: "+46",
  },
  {
    value: "+47",
    label: "+47",
  },
  {
    value: "+48",
    label: "+48",
  },
  {
    value: "+49",
    label: "+49",
  },
];
export default function SignInModal() {
  const [currency, setCurrency] = React.useState("+46");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  // TODO: Add logic once I get state from the auth user or rather info from the API
  const IsSignIn = false;

  const [open, setOpen] = React.useState(!IsSignIn ? true : false);
  const handleOpen = () => setOpen(true);

  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    setOpen(false);
  };

  return (
    <ModalStyles>
      <Button variant="contained" onClick={handleOpen}>
        Apply Now
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        disableBackdropClick
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <SignModalStyles>
            <div className="close_btn">
              <img src="../images/close.svg" alt="close btn" />
            </div>

            {/* This is a form for applying a job and its a common component */}
            {/* Two section
            
            -section one avatars
            -section two the damm form
            - Thee buttons

            -This form should have four pages in total
            - ethier I could use a nested modal which is complicate somehow
            -Or use usestate to determine which section the user is in based on the information provided in
            */}

            <div className="header-section">
              <header>Apply with your Unifaires Profile?</header>
              <p>
                Please confirm that your details are exactly the way you want
                them to appear
              </p>
            </div>

            <div className="inner-wrapper">
              <div className="avatar-section">
                <ImageAvatars
                  image="../images/category/avator.svg"
                  title="title"
                />
              </div>
              <div className="form">
                <form>
                  <Stack spacing={2}>
                    <TextField
                      id="standard-basic"
                      label="Full Name"
                      variant="standard"
                    />
                    <TextField
                      id="standard-basic"
                      label="Email Address"
                      type="email"
                      variant="standard"
                    />
                    <div className="phone-no">
                      <TextField
                        id="standard-select-currency"
                        select
                        label="Code"
                        value={currency}
                        onChange={handleChange}
                        variant="standard"
                        sx={{ width: 80 }}
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        id="standard-basic"
                        label="Phone Number"
                        type="number"
                        variant="standard"
                        fullWidth
                      />
                    </div>

                    <TextField
                      id="standard-basic"
                      label="Resume"
                      // type="file"
                      variant="standard"
                    />
                  </Stack>
                </form>
              </div>
            </div>
            <div className="footer">
              <Button variant="contained">Use Existing Profile</Button>
              <Button variant="contained" className="profile">
                Create New Profile
              </Button>
              <Button
                variant="contained"
                className="cancel"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </SignModalStyles>
        </Fade>
      </Modal>
    </ModalStyles>
  );
}
