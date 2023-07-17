import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


const Contact = () => {

    const [inputItem, setInputItem] = useState(
        { 
            name: "",
            email: "",
            phone: "",
            address: ""

        }
    )
        
        const inputOnList = (e) => {
            setInputItem({
               ...inputItem,[e.target.value]  : e.target.value
            });
        };  

        
        console.log(inputItem)

    return(
        <div>
            <div className="container mt-3">
                <h2 className="text-center mt-3">Add a new contact</h2>
                <form>
                    <div className="mb-3 mt-3">
                    <label htmlFor="name">Full Name:</label>
                    <input type="name" className="form-control" id="name" placeholder="Full Name" name="name" onChange={inputOnList}/>
                    </div>
                    <div className="mb-3 mt-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={inputOnList}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="phone">Phone:</label>
                    <input type="phone" className="form-control" id="phone" placeholder="Enter phone" name="phone" onChange={inputOnList}/>
                    </div>
                    
                    <div className="mb-3">
                    <label htmlFor="address">Address:</label>
                    <input type="address" className="form-control" id="address" placeholder="Enter address" name="address" onChange={inputOnList}/>
                    </div>
                    <div className="d-grid gap-3 mt-4">
                    <button type="submit" className="btn btn-primary btn-block">Save</button>
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