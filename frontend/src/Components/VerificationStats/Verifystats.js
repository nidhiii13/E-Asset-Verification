import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./Verifystats.css";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Verifystats = (props) => {
  const [contacts, setContacts] = useState({});
  const [flag,setFlag] = useState(false);
  const [editFormData, setEditFormData] = useState({
    asset_id: "" ,
    asset_description: "",
    capitalized_date:  "",
    company_id:"" ,
    room_no: "",
    found_status:""
  });


    const info = useSelector((state) => state.User.info);

  const [editContactId, setEditContactId] = useState(null);
  useEffect(async() => {
      if(props.status==true)
    var res=await axios.get('http://127.0.0.1:8000/asset/verification/found',{headers: {
        "Authorization" : `Token ${info.token}`
    }});
    else
    var res=await axios.get('http://127.0.0.1:8000/asset/verification/notfound',{headers: {
        "Authorization" : `Token ${info.token}`
    }});
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
      asset_id: editFormData.asset_id,
      asset_description: editFormData.asset_description,
      capitalized_date: editFormData.capitalized_date,
     company_id: editFormData.company_id,
      room_no: editFormData.room_no,
      found_status: editFormData.found_status
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.asset_id === editFormData.asset_id);

    newContacts[index] = editedContact;
    const pk = newContacts[index].asset_id
   
    setEditContactId(null);
    const req=await axios.put('http://127.0.0.1:8000/asset/report/edit/'+pk,editedContact,{headers: {
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
      asset_id: contact.asset_id,
      asset_description: contact.asset_description,
      capitalized_date: contact.capitalized_date,
      company_id: contact.company_id,
      room_no: contact.room_no,
      found_status: contact.found_status
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
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
              <th>Status</th>
              <th>Actions</th>
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
                    contact={contact}
                    handleEditClick={handleEditClick}
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