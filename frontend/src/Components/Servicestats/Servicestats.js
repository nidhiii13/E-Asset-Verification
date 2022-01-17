import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./Servicestats.css";
import data from "./mock-data.json";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import { useEffect } from "react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Servicestats = () => {
  const exportPdf = () => {

    html2canvas(document.querySelector("#capture")).then(canvas => {
       document.body.appendChild(canvas);  // if you want see your screenshot in body.
       const imgData = canvas.toDataURL('image/png');
       const pdf = new jsPDF();
       pdf.addImage(imgData, 'PNG', 0, 0);
       pdf.save("download.pdf"); 
   });

}
  const [contacts, setContacts] = useState(data);

  const [editFormData, setEditFormData] = useState({
    status:"",
    remarks:"",
    service_count:"",
    asset_id:""
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
  const handleEditFormSubmit = async(event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      status: editFormData.status,
      remarks: editFormData.remarks,
      service_count: editFormData.service_count,
      asset_id: editFormData.asset_id,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
    //const req=await axios.put('http://127.0.0.1:8000/company/edit/'+pk,editedContact);
    //console.log(req);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      status: contact.status,
      remarks: contact.remarks,
      service_count: contact.service_count,
      asset_id: contact.asset_id,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);
   //const req= await axios.delete('http://127.0.0.1:8000/company/delete/'+contactId);
     //console.log(req);
    setContacts(newContacts);
    //console.log(typeof(contacts))
  };

  return (
    <div className="app-container">
      <div id="capture">
        <h1 className="stats_head">Company Stats</h1>
      <form className="stats_form" onSubmit={handleEditFormSubmit}>
        <table className="stats_table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Remarks</th>
              <th>Service Count</th>
              <th>Asset ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
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
      <button onClick={exportPdf} className="print__button">  Print </button>
      
    </div>
  );
};

export default Servicestats;
