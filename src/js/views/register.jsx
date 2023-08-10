import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { addNewContact } from "../store/slice/contactsSlice.js";
import { useDispatch } from "react-redux";

const Contact = () => {

    //calling usedispatch
	const dispatch = useDispatch()
    const navigate = useNavigate()

	const [inputItem, setInputItem] = useState(
        { 
            full_name: "",
            email: "",
            phone: "",
            address: "",
            agenda_slug: "agenda_vjim",

        }
    )
        
        const inputOnChange = (e) => {
            setInputItem({
               ...inputItem, [e.target.id ] : e.target.value
            });
        };  

        const handleOnClick=(e)=>{
            e.preventDefault();
            dispatch(addNewContact(inputItem))
                          
            navigate("/");
            
            
        }

    return(
        <div>
            <div className="container mt-3">
                <h2 className="text-center mt-3">Add a new contact</h2>
                <form>
                    <div className="mb-3 mt-3">
                    <label htmlFor="name">Full Name:</label>
                    <input type="name" className="form-control" id="full_name" placeholder="Full Name" name="name" onChange={inputOnChange}/>
                    </div>
                    <div className="mb-3 mt-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={inputOnChange}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="phone">Phone:</label>
                    <input type="phone" className="form-control" id="phone" placeholder="Enter phone" name="phone" onChange={inputOnChange}/>
                    </div>
                    
                    <div className="mb-3">
                    <label htmlFor="address">Address:</label>
                    <input type="address" className="form-control" id="address" placeholder="Enter address" name="address" onChange={inputOnChange}/>
                    </div>
                    <div className="d-grid gap-3 mt-4">
                    <button type="submit" className="btn btn-primary btn-block" onClick={handleOnClick}>Save</button>
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

export default Contact;