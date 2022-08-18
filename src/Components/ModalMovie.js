import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [inputs, setInputs] = useState({
    name: "",
    about: "",
    image: "",
  });
  const imageName = Date.now().toString();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    console.log("about", inputs.about);

    const myRequest = new Request(
      "https://lprpiuy5i4.execute-api.ap-south-1.amazonaws.com/default/comments",
      {
        method: "POST",
        body: JSON.stringify({
          name: inputs.name,
          about: inputs.about,
          image: `https://reviewapp-images.s3.ap-south-1.amazonaws.com/Movies/${imageName}`,
          queryType: "addMovie",
        }),
      }
    );
    fetch(myRequest)
      .then((response) => response.json())
      .then((response) => {
        // console.log("movies are: ", response);
        // setBackendComments([response, ...backendComments]);
        // setInputs(response);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  function upload(e) {
    console.log(e);
    const url =
      "https://uibj11yzx1.execute-api.ap-south-1.amazonaws.com/default/getS3Url";
    fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        postID: imageName,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetch(res.uploadURL, {
          method: "PUT",
          mode: "cors",
          body: e.target.files[0],
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Movie
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              name="name"
              margin="normal"
              label="Movie Name"
              value={inputs.name || ""}
              onChange={handleChange}
              type="text"
              fullWidth
            />

            <TextField
              autoFocus
              name="about"
              margin="normal"
              label="About"
              value={inputs.about || ""}
              onChange={handleChange}
              type="text"
              fullWidth
            />

            <TextField
              autoFocus
              margin="normal"
              onChange={upload}
              type="file"
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
