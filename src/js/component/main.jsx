import React from "react";
import { Link } from "react-router-dom";

import "../../styles/main.css";

const Main = () => {
    return  (
        <div className="container mt-3">
            <div className="nav justify-content-end mb-3" >
				<Link to="/contact">
					<button className="btn btn-success">add new contact</button>
				</Link>
			</div>
            <div className="row border">
                <div className="col text-center m-1">
                    <img className="img-fluid"  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
                </div>
                <div className="col-6 mt-3">
                <h3>Mike Anamendolla</h3>
                    <p><i class="fa-solid fa-location-dot"></i> 5842 hillcrest Rd </p>                   
                    <p><i class="fa-solid fa-phone"></i> (870) 2888-4149</p>
                    <p><i class="fa-solid fa-envelope"></i> mike.ana@example.com</p>                
                </div>
                <div className="col-3 mt-3">
                <div class="d-flex justify-content-around mb-3">
                    <div class="p-2 ">
                        <span><i class="fa-solid fa-pen"></i></span>
                    </div>
                    <div class="p-2 ">
                        <span><i class="fa-solid fa-trash"></i></span>
                    </div>
                </div>
                </div>
            </div>
            <div className="row border">
                <div className="col text-center m-1">
                    <img className="img-fluid"  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
                </div>
                <div className="col-6 mt-3">
                <h3>Mike Anamendolla</h3>
                    <p><i class="fa-solid fa-location-dot"></i> 5842 hillcrest Rd </p>                   
                    <p><i class="fa-solid fa-phone"></i> (870) 2888-4149</p>
                    <p><i class="fa-solid fa-envelope"></i> mike.ana@example.com</p>                
                </div>
                <div className="col-3 mt-3">
                <div class="d-flex justify-content-around mb-3">
                    <div class="p-2 ">
                        <span><i class="fa-solid fa-pen"></i></span>
                    </div>
                    <div class="p-2 ">
                        <span><i class="fa-solid fa-trash"></i></span>
                    </div>
                </div>
                </div>
            </div>
            <div className="row border">
                <div className="col text-center m-1">
                    <img className="img-fluid"  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
                </div>
                <div className="col-6 mt-3">
                <h3>Mike Anamendolla</h3>
                    <p><i class="fa-solid fa-location-dot"></i> 5842 hillcrest Rd </p>                   
                    <p><i class="fa-solid fa-phone"></i> (870) 2888-4149</p>
                    <p><i class="fa-solid fa-envelope"></i> mike.ana@example.com</p>                
                </div>
                <div className="col-3 mt-3">
                <div class="d-flex justify-content-around mb-3">
                    <div class="p-2 ">
                        <span><i class="fa-solid fa-pen"></i></span>
                    </div>
                    <div class="p-2 ">
                        <span><i class="fa-solid fa-trash"></i></span>
                    </div>
                </div>
                </div>
            </div>
            <div className="row border">
                <div className="col text-center m-1">
                    <img className="img-fluid"  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
                </div>
                <div className="col-6 mt-3">
                <h3>Mike Anamendolla</h3>
                    <p><i class="fa-solid fa-location-dot"></i> 5842 hillcrest Rd </p>                   
                    <p><i class="fa-solid fa-phone"></i> (870) 2888-4149</p>
                    <p><i class="fa-solid fa-envelope"></i> mike.ana@example.com</p>                
                </div>
                <div className="col-3 mt-3">
                <div class="d-flex justify-content-around mb-3">
                    <div class="p-2 ">
                        <span><i class="fa-solid fa-pen"></i></span>
                    </div>
                    <div class="p-2 ">
                        <span><i class="fa-solid fa-trash"></i></span>
                    </div>
                </div>
                </div>
            </div>
        </div>    
    )
}

export default Main;