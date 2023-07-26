import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import { updateContact  } from "../store/slice/contactsSlice.js";
import { useSelector, useDispatch } from "react-redux";


const EditContact = () => {
   // Calling useSelector
	const users = useSelector((state)=>{
		return state.contact;
	});
    
    //calling usedispatch and navigate
	const dispatch = useDispatch()
    const navigate = useNavigate()

    //getting the element by id
    const params = useParams()
    const id = params["theid"]
    const existingContact = users.filter( (_, index) => index == id )
    const existingContactObj = existingContact[0]

    console.log('users', users)
    console.log('existeingcontact', existingContact)
    //

	const [editItem, setEditItem] = useState(
        { 
            name: existingContactObj.name,
            email: existingContactObj.email,
            phone: existingContactObj.phone,
            address: existingContactObj.address

        }
        
    )
        
        const inputOnChange = (e) => {
            setEditItem({
               ...editItem, [e.target.id ] : e.target.value
            });
        };  

         console.log("edit", editItem)
            

        const updateItem = () =>{
            dispatch(updateContact({id:id, editItem:editItem}))
            navigate("/")
        } 
        

    return(
        <div>
            <div className="container mt-3">
                <h2 className="text-center mt-3">Edit your contact</h2>
                <form>
                    <div className="mb-3 mt-3">
                    <label htmlFor="name">Full Name:</label>
                    <input type="name" className="form-control" id="name" name="name" value={editItem.name} onChange={inputOnChange}/>
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
                    <button type="submit" className="btn btn-primary btn-block" onClick={() => updateItem()}>Edit</button>
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