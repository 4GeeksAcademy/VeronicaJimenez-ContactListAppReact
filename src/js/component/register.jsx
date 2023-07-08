import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    return(
        <div>
            <div className="container mt-3">
                <h2 className="text-center mt-3">Add a new contact</h2>
                <form>
                    <div className="mb-3 mt-3">
                    <label for="name">Full Name:</label>
                    <input type="name" class="form-control" id="name" placeholder="Full Name" name="name"/>
                    </div>
                    <div className="mb-3 mt-3">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                    </div>
                    <div className="mb-3">
                    <label for="phone">Phone:</label>
                    <input type="phone" class="form-control" id="phone" placeholder="Enter phone" name="phone"/>
                    </div>
                    
                    <div className="mb-3">
                    <label for="address">Address:</label>
                    <input type="address" class="form-control" id="address" placeholder="Enter address" name="address"/>
                    </div>
                    <div class="d-grid gap-3 mt-4">
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