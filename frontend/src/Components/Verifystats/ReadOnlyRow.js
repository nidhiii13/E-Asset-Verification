import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.asset_id}</td>
      <td>{contact.asset_description}</td>
      <td>{contact.capitalized_date}</td>
      <td>{contact.company_id}</td>
      <td>{contact.room_no}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.asset_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;