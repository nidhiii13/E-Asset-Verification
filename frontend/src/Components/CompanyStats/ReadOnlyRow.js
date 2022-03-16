import React from "react";
import "./Companystats.css";
const ReadOnlyRow = ({active, contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.company_id}</td>
      <td>{contact.company_name}</td>
      <td>{contact.location}</td>
      <td>{contact.email_id}</td>
      <td>{contact.enquiry_no}</td>
      <td>{contact.list}</td>
      <td style={{display:active?"none":"flex"}}>
        <button
          type="button" className="edit_button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" className="edit_button" onClick={() => handleDeleteClick(contact.company_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;