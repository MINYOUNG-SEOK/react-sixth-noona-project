import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./ContactItem.css";

const ContactItem = ({ item, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      dispatch({
        type: "DELETE_CONTACT",
        payload: { id: item.id },
      });
    }
  };

  const handleEdit = () => {
    onEdit({
      id: item.id,
      name: item.name,
      phoneNumber: item.phoneNumber,
    });
  };

  return (
    <div className="contact-item">
      <div className="contact-avatar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
          alt="avatar"
        />
      </div>
      <div className="contact-details">
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
       
      </div>
      <div className="contact-actions">
        <button onClick={handleEdit} className="edit-button">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={handleDelete} className="delete-button">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
