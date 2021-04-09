import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact";
import List from "@material-ui/core/List";
import useStyles from "./styles";
import Header from "../Header";
import { contactsLoaded } from "../../redux/actions";

function Contacts() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {dispatch(contactsLoaded());}, [dispatch]);
  const filteredContacts = useSelector((state) => {
    const { contactSearchString } = state.application;
    const { contacts } = state.contacts;
    return contacts.filter(({ name }) => {
      return (
        name.toLowerCase().indexOf(contactSearchString.toLowerCase()) !== -1
      );
    });
  });

  return (
    <>
      <Header />
      <div className={classes.contacts}>
        <List>
          {filteredContacts.map((contact) => (
            <Contact contact={contact} key={contact.id} />
          ))}
        </List>
      </div>
    </>
  );
}

export default Contacts;
