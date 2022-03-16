import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./Locationstats.css";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import axios from "axios";
import { useEffect } from "react";
import { stream } from "xlsx";
import { useSelector } from "react-redux";
import exportFromJSON from "export-from-json";
const Locationstats = () => {

  const [flag,setFlag]= useState(false);
  const [contacts, setContacts] = useState({});
  const [active,isActive] = useState(false);
  const [editFormData, setEditFormData] = useState({
    name: "",
    room_no: "",
    list_assets:"",
    incharge: ""
  });

  const [editContactId, setEditContactId] = useState(null);
  const info = useSelector((state) => state.User.info);
  useEffect(async() => {
    const res=await axios.get('http://127.0.0.1:8000/location/getloc',{headers: {
        "Authorization" : `Token ${info.token}`
    }});
    console.log(res.data);
    const data= res.data;
    data.map((obj)=>{
        var value =obj.incharge.SSN
        obj.incharge= value
    })
    console.log(res.data)
    setContacts(res.data);
    setFlag(true);
    console.log((contacts))
    
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
        name: editFormData.name,
        room_no: editFormData.room_no,
        list_assets: editFormData.list_assets,
        incharge: editFormData.incharge
     
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.room_no === editFormData.room_no);
    newContacts[index] = editedContact;
     console.log(newContacts[index].room_no);
     const pk =newContacts[index].room_no
 
    setEditContactId(null);
    const req=await axios.put('http://127.0.0.1:8000/location/editloc/'+pk,editedContact,{headers: {
        "Authorization" : `Token ${info.token}`
    }});
    if (req.status==200)
    setContacts(newContacts);
    console.log(req);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.room_no);

    const formValues = {
        name: contact.name,
        room_no: contact.room_no,
        list_assets: contact.list_assets,
        incharge: contact.incharge
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = async(contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.room_no === contactId);

    newContacts.splice(index, 1);
     const req= await axios.delete('http://127.0.0.1:8000/location/deleteloc/'+contactId,{headers: {
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
  const res=await axios.get('http://127.0.0.1:8000/location/getloc',{headers: {
    "Authorization" : `Token ${info.token}`
}});
   var data =res.data;
  const fileName = 'download'
  const exportType = 'csv'

  exportFromJSON({ data, fileName, exportType })
}
  return (
    <div className="app-container">
        <h1 className="stats_head">Location Stats <button className={active ? "remove-action" : "print_button"} onClick={handlePrint}>Print</button><button className={active ? "remove-action" : "print_button"} onClick={handleCSV}>CSV</button></h1>
      <form className="stats_form" onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Room No</th>
              <th>Asset List</th>
              <th>Incharge</th>
              <th className={active ? "remove-action" : "action"}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {flag && contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.room_no ? (
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

export default Locationstats;