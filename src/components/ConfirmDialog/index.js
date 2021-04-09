import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

function ConfirmDialog({ isOpened, handleClose, handleDelete }) {
  return (
    <Dialog open={isOpened} onClose={handleClose} fullWidth>
      <DialogTitle>Удалить?</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={handleDelete} color="secondary">
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
