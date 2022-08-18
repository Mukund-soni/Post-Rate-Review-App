import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import TextField from "@mui/material/TextField";
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

export default function ModalRating(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [input, setInput] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    console.log("Check", props);
    // alert(props.parentID);
    // console.log(input);
    const myRequest = new Request(
      "https://lprpiuy5i4.execute-api.ap-south-1.amazonaws.com/default/comments",
      {
        method: "POST",
        body: JSON.stringify({
          parentId: props.parentID,
          userId: props.currentUserId,
          userRating: input,
          queryType: "addRating",
        }),
      }
    );
    fetch(myRequest)
      .then((response) => response.json())
      .catch((err) => {
        console.log("error: ", err);
      });
    // handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Rating
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
            <p>{input}</p>
            <input
              type="range"
              //   name="rating"
              value={input}
              min="1"
              max="10"
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            variant="contained"
            onClick={handleSubmit}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

// import React from "react";
// import { useState } from "react";
// import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Dialog from "@material-ui/core/Dialog";
// import MuiDialogTitle from "@material-ui/core/DialogTitle";
// import MuiDialogContent from "@material-ui/core/DialogContent";
// import MuiDialogActions from "@material-ui/core/DialogActions";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";

// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//   },
//   closeButton: {
//     position: "absolute",
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
// });

// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           className={classes.closeButton}
//           onClick={onClose}
//         >
//           {/* <CloseIcon /> */}
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

// function ModalRating(props) {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   const [input, setInput] = useState(10);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     handleClose();
//     // console.log("Check", props);
//     // alert(props.parentID);
//     // console.log(input);
//     const myRequest = new Request(
//       "https://lprpiuy5i4.execute-api.ap-south-1.amazonaws.com/default/comments",
//       {
//         method: "POST",
//         body: JSON.stringify({
//           parentId: props.parentID,
//           userId: props.currentUserId,
//           userRating: input,
//           queryType: "addRating",
//         }),
//       }
//     );
//     fetch(myRequest)
//       .then((response) => response.json())
//       .catch((err) => {
//         console.log("error: ", err);
//       });
//     // handleClose();
//   };

//   return (
//     <div>
//       <Button variant="contained" color="primary" onClick={handleClickOpen}>
//         Add Rating
//       </Button>
//       <Dialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <DialogTitle id="customized-dialog-title" onClose={handleClose}>
//           Your Rating
//         </DialogTitle>
//         <DialogContent dividers>
//           <form onSubmit={handleSubmit}>
//             <p>{input}</p>
//             <TextField
//               type="range"
//               //   name="rating"
//               value={input}
//               min="1"
//               max="10"
//               onChange={(e) => setInput(e.target.value)}
//             />
//             {/* <input type="submit" /> */}
//           </form>
//         </DialogContent>
//         <DialogActions>
//           <Button
//             autoFocus
//             variant="contained"
//             onClick={handleSubmit}
//             color="primary"
//           >
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default ModalRating;
