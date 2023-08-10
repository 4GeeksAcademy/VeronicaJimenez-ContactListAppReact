import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import { updateContact } from "../store/slice/contactsSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts} from "../store/slice/contactsSlice.js";

const EditContact = () => {
    


    //calling usedispatch and navigate
	const dispatch = useDispatch()
    const navigate = useNavigate()

    
   //getting the element by id
    
    const params = useParams()
    const contactId = params["theid"]
    console.log("contactId", contactId)
   // Calling useSelector
   const users = useSelector(selectContacts);
   const existingContact = users.filter( (data) => data.id == contactId )
   const existingContactObj = existingContact[0]

    if (!existingContactObj) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

	const [editItem, setEditItem] = useState(
        { 
            full_name: existingContactObj.full_name,
            email: existingContactObj.email,
            phone: existingContactObj.phone,
            address: existingContactObj.address,
            id: existingContactObj.id,
            agenda_slug: "agenda_vjim"

        }
        
    )
        
        const inputOnChange = (e) => {
            setEditItem({
               ...editItem, [e.target.id ] : e.target.value
            });
        };  

         console.log("edit", editItem)
            

        const updateItem = (e) =>{
            e.preventDefault();
            dispatch(updateContact(editItem))
            navigate("/")
        } 
        

    return(
        <div>
            <div className="container mt-3">
                <h2 className="text-center mt-3">Edit your contact</h2>
                <form>
                    <div className="mb-3 mt-3">
                    <label htmlFor="name">Full Name:</label>
                    <input type="name" className="form-control" id="full_name" name="name" value={editItem.full_name} onChange={inputOnChange}/>
                    </div>
                    <div className="mb-3 mt-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" value={editItem.email} name="email" onChange={inputOnChange}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="phone">Phone:</label>
                    <input type="phone" className="form-control" id="phone" value={editItem.phone} name="phone" onChange={inputOnChange}/>
                    </div>
                    
                    <div className="mb-3">
                    <label htmlFor="address">Address:</label>
                    <input type="address" className="form-control" id="address" value={editItem.address} name="address" onChange={inputOnChange}/>
                    </div>
                    <div className="d-grid gap-3 mt-4">
                    <button type="submit" className="btn btn-primary btn-block" onClick={updateItem}>Edit</button>
                    </div>    
                </form>
            </div>
           <div className="container mt-3"> 
            <Link to="/">
				<span>or get back to contacts</span>
			</Link>
            </div>
        </div>
    );
};

export default EditContact;