import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ContactMenu from "../ContactMenu";
import useStyles from "./styles";

function Contact({ contact }) {
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem}>
      <ListItemText>{contact.name}</ListItemText>
      <ListItemText className={classes.phone}>{contact.phone}</ListItemText>
      <ListItemText className={classes.email}>{contact.email}</ListItemText>
      <ListItemSecondaryAction>
        <ContactMenu contact={contact} />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Contact;
