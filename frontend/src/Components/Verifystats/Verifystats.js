import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./Verifystats.css";
import data from "./mock-data.json";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import { useEffect } from "react";

const Verifystats = () => {
  const [contacts, setContacts] = useState(data);

  const [editFormData, setEditFormData] = useState({
    asset_id: "" ,
    asset_description: "",
    capitalized_date:  "",
    company_id:"" ,
    room_no: ""
  });

  const [editContactId, setEditContactId] = useState(null);
  //useEffect(async() => {
    //const res=await axios.get('http://127.0.0.1:8000/company/add');
    //console.log(res.data);
    //setContacts(res.data);
    //setFlag(true);
    //console.log(typeof(contacts))
    
  //}, [])

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      asset_id: editFormData.asset_id,
      asset_description: editFormData.asset_description,
      capitalized_date: editFormData.capitalized_date,
     company_id: editFormData.company_id,
      room_no: editFormData.room_no,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.asset_id === editFormData.asset_id);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
    //const req=await axios.put('http://127.0.0.1:8000/company/edit/'+pk,editedContact);
    //console.log(req);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.asset_id);

    const formValues = {
      asset_id: contact.asset_id,
      asset_description: contact.asset_description,
      capitalized_date: contact.capitalized_date,
      company_id: contact.company_id,
      room_no: contact.room_no
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.asset_id === contactId);

    newContacts.splice(index, 1);
   //const req= await axios.delete('http://127.0.0.1:8000/company/delete/'+contactId);
     //console.log(req);
    setContacts(newContacts);
    //console.log(typeof(contacts))
  };

  return (
    <div className="app-container">
        <h1 className="stats_head">Verification Report for found assets</h1>
      <form className="stats_form" onSubmit={handleEditFormSubmit}>
        <table className="stats_table">
          <thead>
            <tr>
              <th>Asset id</th>
              <th>Asset Description</th>
              <th>Capitalized date</th>
              <th>Company ID</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editFormData.asset_id === contact.asset_id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      
    </div>
  );
};

export default Verifystats;
