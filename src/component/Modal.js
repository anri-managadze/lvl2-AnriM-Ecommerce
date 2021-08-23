import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {Box} from "@material-ui/core";

export default function Modal({children,title,btntitle,margin}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        component={Box}
        margin={margin}
      >
          {btntitle}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"

      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent >
            {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}
