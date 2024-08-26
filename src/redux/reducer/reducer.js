const initialState = {
  contactList: [],
  filteredContacts: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      const updatedContactList = [
        ...state.contactList,
        {
          id: state.contactList.length + 1,
          name: payload.name,
          phoneNumber: payload.phoneNumber,
        },
      ];
      return {
        ...state,
        contactList: updatedContactList,
        filteredContacts: updatedContactList,
      };

    case "EDIT_CONTACT":
      const editedContacts = state.contactList.map((contact) =>
        contact.id === payload.id
          ? { ...contact, name: payload.name, phoneNumber: payload.phoneNumber }
          : contact
      );
      return {
        ...state,
        contactList: editedContacts,
        filteredContacts: editedContacts,
      };

    case "SEARCH_CONTACT":
      const { searchKeyword } = payload;
      const filteredContacts = state.contactList.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          contact.phoneNumber.includes(searchKeyword)
      );
      return {
        ...state,
        filteredContacts,
      };
    case "SHOW_ALL_CONTACTS":
      return {
        ...state,
        filteredContacts: state.contactList,
      };
    case "DELETE_CONTACT":
      const remainingContacts = state.contactList.filter(
        (contact) => contact.id !== payload.id
      );
      return {
        ...state,
        contactList: remainingContacts,
        filteredContacts: remainingContacts,
      };

    default:
      return { ...state };
  }
}

export default reducer;
