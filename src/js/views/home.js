import React from "react";
import { Link } from "react-router-dom";

import { eraseContact} from "../store/slice/contactsSlice.js";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectContacts, getContactsError, getContactsStatus, fetchContacts } from "../store/slice/contactsSlice.js";



const Home = () => {
	// Calling useSelector
	const users = useSelector(selectContacts);
	const contactsStatus = useSelector(getContactsStatus)
	const errors = useSelector(getContactsError)
	
	//useeffect
	useEffect(()=>{
		
        dispatch(fetchContacts())
        
    }, [])
	if (users.lenght == 0 || users.lenght == 1|| users.lenght == 2) {
		return <p>"Loading..."</p>;
    } 
	// Using the extrareducers
	
	if (contactsStatus === 'loading') {
        return <p>"Loading..."</p>;
    } 
	 
	if (contactsStatus === 'failed') {
        return <p>{errors}</p>;
    }

	
	//calling usedispatch
	const dispatch = useDispatch()

	const removeItem = (id) => {
		dispatch(eraseContact(id))
		
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
					 <img className="img-fluid"  src="https://thenounproject.com/api/private/icons/4216248/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"/>
				 </div>
				 <div className="col-6 mt-3">
					 
					 <h3 >{data.full_name}</h3>
					 <p><i className="fa-solid fa-location-dot"></i> {data.address} </p>                   
					 <p><i className="fa-solid fa-phone"></i> {data.phone} </p>
					 <p><i className="fa-solid fa-envelope"></i> {data.email} </p>                
				 </div>
				 <div className="col-3 mt-3" >
					 <div className="d-flex justify-content-around mb-3">
						 <div className="p-2 ">
							<Link to={`/edit/${data.id}`}>
								<button ><i className="fa-solid fa-pen"></i></button>
							</Link>
							
						 </div>
						 <div className="p-2 ">
							 <button onClick={() => removeItem(data.id)}><i className="fa-solid fa-trash"></i></button>
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