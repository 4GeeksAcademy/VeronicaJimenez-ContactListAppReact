import React from "react";
import { Link } from "react-router-dom";

import { deleteContact} from "../store/slice/contactsSlice.js";

import { useSelector, useDispatch } from "react-redux";


const Home = () => {
	// Calling useSelector
	const users = useSelector((state)=>{
		return state.contact;
	});
	//calling usedispatch
	const dispatch = useDispatch()

	const removeItem = (index) => {
		dispatch(deleteContact(index))
	}

	console.log('users',users)
	
	return(
	<div className="container mt-3">
        <div className="nav justify-content-end mb-3" >
			<Link to="/contact">
				<button className="btn btn-success" >add new contact</button>
			</Link>
		</div>

		<div>
			{users.map((data, i)=>(

				<div className="row border" key={i}>
				 <div className="col text-center m-1">
					 <img className="img-fluid"  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
				 </div>
				 <div className="col-6 mt-3">
					 
					 <h3 >{data.name}</h3>
					 <p><i className="fa-solid fa-location-dot"></i> {data.address} </p>                   
					 <p><i className="fa-solid fa-phone"></i> {data.phone} </p>
					 <p><i className="fa-solid fa-envelope"></i> {data.email} </p>                
				 </div>
				 <div className="col-3 mt-3" >
					 <div className="d-flex justify-content-around mb-3">
						 <div className="p-2 ">
							<Link to={`/edit/${i}`}>
								<button ><i className="fa-solid fa-pen"></i></button>
							</Link>
							
						 </div>
						 <div className="p-2 ">
							 <button onClick={() => removeItem(i)}><i className="fa-solid fa-trash"></i></button>
						 </div>
					 </div>
				 </div>
			 </div>    
			))}

		</div>
				
	</div>  
	)
	
};
	
export default Home