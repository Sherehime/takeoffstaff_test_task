import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import { useDispatch } from "react-redux";
import { contactEdited } from "../../redux/actions";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";

function EditorDialog({ contact, isOpened, handleClose }) {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
  });

  const handleChangeInputs = (e) =>
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });

  const emptyForms =
    inputs.name === "" || inputs.phone === "" || inputs.email === "";

  const handleEditContact = () => {
    const { name, phone, email } = inputs;
    dispatch(contactEdited(contact.id, name, phone, email));
    handleClose();
  };

  return (
    <>
      <Dialog onClose={handleClose} open={isOpened} fullWidth>
        <DialogContent>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                name="name"
                label="Введите имя"
                variant="outlined"
                value={inputs.name}
                onChange={handleChangeInputs}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                name="phone"
                label="Введите номер"
                variant="outlined"
                value={inputs.phone}
                onChange={handleChangeInputs}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                name="email"
                label="Введите email"
                variant="outlined"
                value={inputs.email}
                onChange={handleChangeInputs}
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Отмена
          </Button>
          <Button onClick={handleEditContact} disabled={emptyForms}>
            Редактировать
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditorDialog;
