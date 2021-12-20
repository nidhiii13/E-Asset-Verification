import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.company_id}</td>
      <td>{contact.company_name}</td>
      <td>{contact.location}</td>
      <td>{contact.email_id}</td>
      <td>{contact.enquiry_no}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.company_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;