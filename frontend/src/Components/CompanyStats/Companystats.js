import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./Companystats.css";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import axios from "axios";
import { useEffect } from "react";
import { stream } from "xlsx";
import { useSelector } from "react-redux";
import exportFromJSON from 'export-from-json';
const Companystats = () => {

  const [flag,setFlag]= useState(false);
  const [contacts, setContacts] = useState({});
  const [active,isActive] = useState(false);
  const [editFormData, setEditFormData] = useState({
    company_id: "",
    company_name: "",
    location: "",
    email_id: "",
    enquiry_no:"",
    list:""
  });

  const [editContactId, setEditContactId] = useState(null);
  const info = useSelector((state) => state.User.info);
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
        enquiry_no:editFormData.enquiry_no,
        list:editFormData.list
     
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.company_id === editContactId);
    newContacts[index] = editedContact;
     console.log(newContacts[index].company_id);
     const pk =newContacts[index].company_id
  
    setEditContactId(null);
    const req=await axios.put('http://127.0.0.1:8000/company/edit/'+pk,editedContact,{headers: {
        "Authorization" : `Token ${info.token}`
    }});
    if (req.status==200)
    setContacts(newContacts);
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
        enquiry_no:contact.enquiry_no,
        list:contact.list
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
     const req= await axios.delete('http://127.0.0.1:8000/company/delete/'+contactId,{headers: {
        "Authorization" : `Token ${info.token}`
    }});
     console.log(req);
    setContacts(newContacts);
    console.log(typeof(contacts))
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
  const res=await axios.get('http://127.0.0.1:8000/company/add');
   var data =res.data;
  const fileName = 'download'
  const exportType = 'csv'

  exportFromJSON({ data, fileName, exportType })
}
  return (
    <div className="app-container">
        <h1 className="stats_head">Company Stats  <button className={active ? "remove-action" : "print_button"} onClick={handlePrint}>Print</button><button className={active ? "remove-action" : "print_button"} onClick={handleCSV}>CSV</button></h1>
      <form className="stats_form" onSubmit={handleEditFormSubmit}>
        <table className="stats_table">
          <thead>
            <tr>
              <th>Company ID</th>
              <th>Company Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Enquiry No</th>
              <th>Contributions</th>
              <th className={active ? "remove-action" : "action"}>Actions</th>
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

export default Companystats;