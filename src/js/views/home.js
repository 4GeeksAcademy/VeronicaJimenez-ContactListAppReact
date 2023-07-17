import React from "react";
import { Link } from "react-router-dom";
import Main from "../component/main.jsx"

import { addContact } from "../store/slice/contactsSlice.js";

import { useSelector, useDispatch } from "react-redux";


const Home = () => {
	// Calling useSelector
	const users = useSelector((state)=>{
		return state.contact;
	})
	//calling usedispatch
	const dispatch = useDispatch()

	console.log(users)
	
	return(
	<div className="container mt-3">
        <div className="nav justify-content-end mb-3" >
			<Link to="/contact">
				<button className="btn btn-success" >add new contact</button>
			</Link>
		</div>
        
		<Main/>  

		<div  onClick={() => dispatch(addContact())} >Click me</div>
		{/* <ul>
			{users.map((task,i) => (
				<li key={i}>{task}				
				</li>						
			)
			)}
        
        </ul>      */}
    </div>  
	)
	
};
	
export default Home