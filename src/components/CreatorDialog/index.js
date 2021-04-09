import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import { contactAdded } from "../../redux/actions";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";

function CreatorDialog() {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChangeInputs = (e) =>
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });

  const [creatorOpened, setCreatorOpened] = useState(false);
  const handleCreator = () => setCreatorOpened(!creatorOpened);

  const emptyForms =
    inputs.name === "" || inputs.phone === "" || inputs.email === "";

  const handleCreateContact = () => {
    const { name,phone, email } = inputs;
    dispatch(contactAdded(name,phone, email));
    handleCreator();
    setInputs({
      name:"",
      phone:"",
      email:"",
    });
  };

  return (
    <>
      <Button onClick={handleCreator} variant="contained" color="primary" disableElevation>
       <div className="add-button" >Добавить новый</div>
      </Button>
      <Dialog onClose={handleCreator} open={creatorOpened} fullWidth>
        <DialogContent>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField name="name" label="Введите имя" variant="outlined" value={inputs.name} onChange={handleChangeInputs} fullWidth
              />
            </Grid>
            <Grid item>
              <TextField name="phone" label="Введите номер" variant="outlined" value={inputs.phone} onChange={handleChangeInputs} fullWidth
              />
            </Grid>
            <Grid item>
              <TextField name="email" label="Введите email" variant="outlined" value={inputs.email} onChange={handleChangeInputs} fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreator} color="secondary">
            Отмена
          </Button>
          <Button onClick={handleCreateContact} disabled={emptyForms}>
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CreatorDialog;
