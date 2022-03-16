import React from "react";

const ReadOnlyRow = ({ active, contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td> {String(contact.status)}</td>
      <td>{contact.remarks}</td>
      <td>{contact.service_count}</td>
      <td>{contact.asset_id}</td>
      <td style={{display:active?"none":"flex"}}>
        <button className="edit_button"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" className="edit_button" onClick={() => handleDeleteClick(contact.asset_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;