import React from "react";

//import { useSelector, useDispatch } from "react-redux";


const Main = () => {
    
   /* const contacts = useSelector((store)=> {
        return store.contact;
    })
    console.log(contacts)

    const contactoDesdeStore = contacts.map((persona, i) => {
        return <li key={i}>{persona}</li>
    })*/

   

    
    return  (
        <div className="row border">
            <div className="col text-center m-1">
                <img className="img-fluid"  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
            </div>
            <div className="col-6 mt-3">
                
                <h3>Mike Anamendolla</h3>
                <p><i className="fa-solid fa-location-dot"></i> 5842 hillcrest Rd </p>                   
                <p><i className="fa-solid fa-phone"></i> (870) 2888-4149</p>
                <p><i className="fa-solid fa-envelope"></i> mike.ana@example.com</p>                
            </div>
            <div className="col-3 mt-3">
                <div className="d-flex justify-content-around mb-3">
                    <div className="p-2 ">
                        <span><i className="fa-solid fa-pen"></i></span>
                    </div>
                    <div className="p-2 ">
                        <span><i className="fa-solid fa-trash"></i></span>
                    </div>
                </div>
            </div>
        </div>    
           
            
        
    )
}

export default Main;