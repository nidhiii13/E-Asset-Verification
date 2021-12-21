import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.status}</td>
      <td>{contact.remarks}</td>
      <td>{contact.service_count}</td>
      <td>{contact.asset_id}</td>
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