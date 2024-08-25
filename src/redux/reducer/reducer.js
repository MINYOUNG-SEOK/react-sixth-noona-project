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
          name: payload.name,
          phoneNumber: payload.phoneNumber,
        },
      ];
      return {
        ...state,
        contactList: updatedContactList,
        filteredContacts: updatedContactList,
      };
    case "SEARCH_CONTACT":
      const { searchType, searchKeyword } = payload;
      const filteredContacts = state.contactList.filter((contact) =>
        contact[searchType].toLowerCase().includes(searchKeyword.toLowerCase())
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
        (contact) =>
          contact.name !== payload.name ||
          contact.phoneNumber !== payload.phoneNumber
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
