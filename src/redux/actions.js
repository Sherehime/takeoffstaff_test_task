import { del, get, patch, post } from "../api/api";

export function contactsLoaded() {
  return (dispatch) => {
    dispatch({ type: "contacts/load/started" });

    get("/contacts").then((json) => {
      dispatch({
        type: "contacts/load/succeed",
        payload: json,
      });
    });
  };
}

export function contactAdded(name, phone, email) {
  return (dispatch) => {
    dispatch({ type: "contact/add/started" });

    post("/contacts", { name, phone, email }).then((json) => {
      dispatch({
        type: "contact/add/succeed",
        payload: json,
      });
    });
  };
}

export function contactDeleted(id) {
  return (dispatch) => {
    dispatch({ type: "contact/delete/started" });

    del(`/contacts/${id}`).then((json) => {
      dispatch({
        type: "contact/delete/succeed",
        payload: id,
      });
    });
  };
}

export function contactEdited(id, name, phone, email) {
  return (dispatch) => {
    dispatch({ type: "contact/edit/started" });

    patch(`/contacts/${id}`, { name, phone, email }).then((json) => {
      dispatch({
        type: "contact/edit/succeed",
        payload: json,
      });
    });
  };
}

export function contactSearchStringSet(value) {
  return {
    type: "contacts/search/set",
    payload: value,
  };
}

export function userAuthorised(login, password) {
  return (dispatch) => {
    dispatch({ type: "auth/process/started" });

    get(`/users/1`).then((json) => {
      if (login === json.login && password === json.password) {
        localStorage.setItem("token", JSON.stringify(json.token));
        dispatch({ type: "auth/process/succeed" });
      } else {
        dispatch({ type: "auth/process/failed" });
      }
    });
  };
}

export function errorReset() {
  return { type: "error/reset/succeed" };
}
