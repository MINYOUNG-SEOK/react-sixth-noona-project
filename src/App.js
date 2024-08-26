import React, { useState } from "react";
import "./App.css";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openEditModal = (contact) => {
    setCurrentContact(contact);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setCurrentContact(null);
    setIsEditModalOpen(false);
  };

  return (
    <div className="container">
      <div className="App">
        <div className="circle-shape"></div>

        <div className="semi-circle-shape"></div>

        <div className="main-content">
          <button className="add-button" onClick={openModal}>
            <FontAwesomeIcon icon={faUserPlus} />
          </button>

          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close-button" onClick={closeModal}>
                  &times;
                </span>
                <h2 className="modal-title">Create contact</h2>
                <ContactForm onClose={closeModal} />
              </div>
            </div>
          )}

          {isEditModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close-button" onClick={closeEditModal}>
                  &times;
                </span>
                <h2 className="modal-title">Edit contact</h2>
                <ContactForm
                  contact={currentContact}
                  onClose={closeEditModal}
                />
              </div>
            </div>
          )}

          <div>
            <ContactList onEditContact={openEditModal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
