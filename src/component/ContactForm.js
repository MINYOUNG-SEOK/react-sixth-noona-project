import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./ContactForm.css";

const ContactForm = ({ contact, onClose }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setPhoneNumber(contact.phoneNumber);
    }
  }, [contact]);

  const addContact = (event) => {
    event.preventDefault();

    if (name.trim() === "" || phoneNumber.trim() === "") {
      alert("Please enter the name and contact number.");
      return;
    }

    if (contact) {
      dispatch({
        type: "EDIT_CONTACT",
        payload: { id: contact.id, name, phoneNumber },
      });
    } else {
      dispatch({
        type: "ADD_CONTACT",
        payload: { name, phoneNumber },
      });
    }

    setName("");
    setPhoneNumber("");
    onClose();
  };

  return (
    <form onSubmit={addContact} className="form-container">
      <div className="form-group">
        <label htmlFor="formName">Name</label>
        <input
          type="text"
          id="formName"
          placeholder="Please enter the name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="formContact">Contact Number</label>
        <input
          type="tel"
          id="formContact"
          placeholder="Please enter the contact number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </div>

      <button type="submit" className="submit-add-button">
        {contact ? "UPDATE" : "SAVE"}
      </button>
    </form>
  );
};

export default ContactForm;
