import React from "react";
import { Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AppBar from "@material-ui/core/AppBar";
import useStyles from "./styles";
import CreatorDialog from "../CreatorDialog";
import { useDispatch, useSelector } from "react-redux";
import { contactSearchStringSet } from "../../redux/actions";
import Grid from "@material-ui/core/Grid";

function Header() {
  const dispatch = useDispatch();

  const contactSearchString = useSelector(
    (state) => state.application.contactSearchString
  );

  const handleSearchStringChange = (e) =>
    dispatch(contactSearchStringSet(e.target.value));

  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <Grid
          container
          wrap="nowrap"
          justify="space-around"
          alignItems="center"
        >
          <Grid item lg={2}>
            <CreatorDialog />
          </Grid>
          <Grid item lg={4}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                value={contactSearchString}
                onChange={handleSearchStringChange}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
