import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./Companystats.css";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import axios from "axios";
import { useEffect } from "react";
import { stream } from "xlsx";
const Companystats = () => {

  const [flag,setFlag]= useState(false);
  const [contacts, setContacts] = useState({});

  const [editFormData, setEditFormData] = useState({
    company_id: "",
    company_name: "",
    location: "",
    email_id: "",
    enquiry_no:""
  });

  const [editContactId, setEditContactId] = useState(null);

  useEffect(async() => {
    const res=await axios.get('http://127.0.0.1:8000/company/add');
    console.log(res.data);
    setContacts(res.data);
    setFlag(true);
    console.log(typeof(contacts))
    
  }, [])

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedContact = {
        company_id: editFormData.company_id,
        company_name: editFormData.company_name,
        location: editFormData.location,
        email_id: editFormData.email_id,
        enquiry_no:editFormData.enquiry_no
     
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.company_id === editContactId);
    newContacts[index] = editedContact;
     console.log(newContacts[index].company_id);
     const pk =newContacts[index].company_id
    setContacts(newContacts);
    setEditContactId(null);
    const req=await axios.put('http://127.0.0.1:8000/company/edit/'+pk,editedContact);
    console.log(req);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.company_id);

    const formValues = {
        company_id: contact.company_id,
        company_name: contact.company_name,
        location: contact.location,
        email_id: contact.email_id,
        enquiry_no:contact.enquiry_no
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = async(contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.company_id === contactId);

    newContacts.splice(index, 1);
     const req= await axios.delete('http://127.0.0.1:8000/company/delete/'+contactId);
     console.log(req);
    setContacts(newContacts);
    console.log(typeof(contacts))
  };

  return (
    <div className="app-container">
        <h1 className="stats_head">Company Stats</h1>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Company ID</th>
              <th>Company Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Enquiry No</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {flag && contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.company_id ? (
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

export default Companystats;