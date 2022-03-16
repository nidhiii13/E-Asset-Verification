import React from "react";

const ReadOnlyRow = ({ active, contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.room_no}</td>
      <td>{contact.list_assets}</td>
      <td>{contact.incharge}</td>
      <td style={{display:active?"none":"flex"}}>
        <button className="edit_button"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" className="edit_button" onClick={() => handleDeleteClick(contact.room_no)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;