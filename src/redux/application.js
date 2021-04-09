//Фейковая проверка на авторизацию
//В реальном проекте такого, само собой, не будет

const isAuth =
  localStorage.getItem("token") === null
    ? false
    : JSON.parse(localStorage.getItem("token")) ===
      "qwertyuioasdfghjk23456789i";

const initialState = {
  authProcessing: false,
  isAuth,
  error: false,
  contactSearchString: "",
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case "contacts/search/set":
      return {
        ...state,
        contactSearchString: action.payload,
      };

    case "auth/process/started":
      return {
        ...state,
        authProcessing: true,
      };

    case "auth/process/succeed":
      return {
        ...state,
        isAuth: true,
        authProcessing: false,
      };

    case "auth/process/failed":
      return {
        ...state,
        error: true,
        authProcessing: false,
      };

    case "error/reset/succeed":
      return {
        ...state,
        error: false,
      };

    default:
      return state;
  }
}
