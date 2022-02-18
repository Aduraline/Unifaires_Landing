import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import styled from "styled-components";
import Link from "next/link";

const SignModalStyles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 0%;
  height: 468px;
  width: 705px;
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
    button {
      background: transparent;
      border: none;
      -webkit-transition: 0.5s;
      &:hover {
        transform: translateY(0) scale(1.2);
      }
    }
  }
  header {
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    color: #5832da;
    padding: 0 96px 0 96px;
    margin-bottom: 48px;
  }

  .button_wrapper {
    padding: 0 96px 0 96px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 38.5px;
  }
`;

const Button = styled.button`
  background-color: ${(props) => (props.create ? " #5832DA;" : "#EEEAFB;")};
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  -webkit-transition: 0.5s;
  &:hover {
    transform: translateY(0) scale(1.1);
  }
  color: ${(props) => (props.create ? " #ffff;" : "#5832DA;")};
`;

export default function SignInModal() {
  // TODO: Add logic once I get state from the auth user or rather info from the API
  const IsSignIn = false;

  const [open, setOpen] = React.useState(!IsSignIn ? true : false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <SignModalStyles>
            <div className="close_btn">
              <button onClick={handleClose}>
                {" "}
                <img src="../images/close.svg" alt="close btn" />
              </button>
            </div>

            <header>Sign Up to start this course and many more</header>
            <div className="button_wrapper">
              <Link href="/signup">
                <Button create className="default-btn">
                  Create a new account
                </Button>
              </Link>
              <Link href="/login">
                <Button>Login to your account</Button>
              </Link>
            </div>
          </SignModalStyles>
        </Fade>
      </Modal>
    </div>
  );
}
