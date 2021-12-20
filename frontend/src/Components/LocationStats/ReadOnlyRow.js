import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.room_no}</td>
      <td>{contact.list_assets}</td>
      <td>{contact.incharge}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.room_no)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;