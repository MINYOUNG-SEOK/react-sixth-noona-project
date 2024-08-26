import React from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";
import './ContactList.css';


const ContactList = ({onEditContact}) => {
  const contactList = useSelector((state) => state.filteredContacts);

  return (
    <div className="list-container">
        <div className="profile-header">
        <span className="profile-title">Contact List</span>
      </div>
      <div className="profile-divider"></div>
      <SearchBox />
      <div className="profile-divider"></div>
      {contactList.map((item,index) => (
        <ContactItem key={item.name} item={item} onEdit={onEditContact} />
      ))}
    </div>
  );
};

export default ContactList;
