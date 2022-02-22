import * as React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import SignIn from "components/AuthPages/SignInPage/SignIn";

const IconButtonStyles = styled.div`
  .MuiIconButton-root {
    position: absolute;
    margin-top: 30px;
    display: flex;
    border-radius: 999px;
    background: rgba(88, 50, 218, 1);
    color: white;
    margin-right: 30px;
    right: 0;

    -webkit-transition: 0.5s;
    &:hover {
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
      background: rgba(88, 50, 218, 1);
    }
  }
`;

const FullScreenDialogStyles = styled.div`
  .MuiButton-root {
    height: 48px;
    text-transform: capitalize;
    border-radius: 6px;
    font-weight: 600;
    background: rgba(184, 188, 202, 0.1);
    border: #5832da 1px solid;
    color: #5832da;
    &:hover {
      background: rgba(184, 188, 202, 0.1);
    }
  }
`;
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FullScreenDialogStyles>
      <Button variant="outlined" fullWidth onClick={handleClickOpen}>
        Create Account
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <IconButtonStyles>
          <IconButton
            sx={{ position: "absolute", zIndex: "modal" }}
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </IconButtonStyles>
        <SignIn />
      </Dialog>
    </FullScreenDialogStyles>
  );
}
