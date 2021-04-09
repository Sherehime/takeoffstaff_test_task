import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import { errorReset, userAuthorised } from "../../redux/actions";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { Grid } from "@material-ui/core";

function Auth() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.application.error);
  const closeAlert = () => dispatch(errorReset());
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {setLogin(e.target.value);};
  const handleChangePassword = (e) => {setPassword(e.target.value);};

  const emptyForms = login === "" || password === "";
  const handleClick = () => dispatch(userAuthorised(login, password));
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (!emptyForms) {
        handleClick();
      }
    }
  };

  return (
    <div className={classes.auth}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField label="Имя пользователя"  value={login}  onChange={handleChangeUsername}  variant="outlined" onKeyDown={handleKeyDown} fullWidth/>
        </Grid>
        <Grid item>
          <TextField
            label="Пароль"  value={password}  onChange={handleChangePassword} variant="outlined" onKeyDown={handleKeyDown}   type="password"  fullWidth/>
        </Grid>
        <Grid item>
          <Button
            color="primary" variant="outlined" disabled={emptyForms} onClick={handleClick} fullWidth>
            Войти
          </Button>
        </Grid>
      </Grid>
      <Snackbar open={error} autoHideDuration={6000} onClose={closeAlert}>
        <Alert
          severity="error" elevation="5" variant="filled" onClose={closeAlert}>
          Произошла ошибка
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Auth;
