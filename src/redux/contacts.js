const initialState = {
  contacts: [],
  loading: false,
  adding: false,
  deleting: false,
  editing: false,
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case "contacts/load/started":
      return {
        ...state,
        loading: true,
      };

    case "contacts/load/succeed":
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };

    case "contact/add/started":
      return {
        ...state,
        adding: true,
      };

    case "contact/add/succeed":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        loading: false,
      };

    case "contact/delete/started":
      return {
        ...state,
        deleting: true,
      };

    case "contact/delete/succeed":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
        contactsDeleting: false,
      };

    case "contact/edit/started":
      return {
        ...state,
        editing: true,
      };

    case "contact/edit/succeed":
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            return action.payload;
          }

          return contact;
        }),
        contactsEditing: false,
      };

    default:
      return state;
  }
}
