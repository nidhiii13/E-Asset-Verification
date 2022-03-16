import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./Servicestats.css";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import exportFromJSON from "export-from-json";
const Servicestats = () => {
  const [active,isActive] = useState(false);
  const [contacts, setContacts] = useState({});
  const [flag,setFlag] = useState(false);
  const [editFormData, setEditFormData] = useState({
    status:"",
    remarks:"",
    service_count:"",
    asset_id:""
  });
  const info = useSelector((state) => state.User.info);
  const [editContactId, setEditContactId] = useState(null);
  useEffect(async() => {
    const res=await axios.get('http://127.0.0.1:8000/service/getservice',{headers: {
        "Authorization" : `Token ${info.token}`
    }});
    const data = res.data;
    data.map((obj)=>{
        var value =obj.asset_id.asset_id
        obj.asset_id = value
    })
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

    const index = contacts.findIndex((contact) => contact.asset_id === editContactId);

    newContacts[index] = editedContact;
    const pk =newContacts[index].asset_id

    setEditContactId(null);
    const req=await axios.put('http://127.0.0.1:8000/service/editservice/'+pk,editedContact,{headers: {
        "Authorization" : `Token ${info.token}`
    }});
    if (req.status==200)
    setContacts(newContacts);
    console.log(req);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.asset_id);

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

  const handleDeleteClick = async(contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.asset_id === contactId);

    newContacts.splice(index, 1);
   const req= await axios.delete('http://127.0.0.1:8000/service/deleteservice/'+contactId,{headers: {
    "Authorization" : `Token ${info.token}`
}});
     //console.log(req);
    setContacts(newContacts);
    //console.log(typeof(contacts))
  };

  const handlePrint =()=>{
   
    isActive(true);
    setTimeout(printReport,300);
  
  }
const printReport=()=>{
  window.print();
  isActive(false);
}
const handleCSV = async() =>{
  const res=await axios.get('http://127.0.0.1:8000/service/getservice',{headers: {
        "Authorization" : `Token ${info.token}`
    }});
   var data =res.data;
  const fileName = 'download'
  const exportType = 'csv'

  exportFromJSON({ data, fileName, exportType })
}
  return (
    <div className="app-container">
        <h1 className="stats_head">Service Stats <button className={active ? "remove-action" : "print_button"} onClick={handlePrint}>Print</button><button className={active ? "remove-action" : "print_button"} onClick={handleCSV}>CSV</button></h1>
      <form className="stats_form" onSubmit={handleEditFormSubmit}>
        <table className="stats_table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Remarks</th>
              <th>Service Count</th>
              <th>Asset ID</th>
              <th className={active ? "remove-action" : "action"}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {flag && contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.asset_id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    active={active}
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

export default Servicestats;