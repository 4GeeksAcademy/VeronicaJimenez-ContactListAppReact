import React from "react";
import { ReactDOM } from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./views/home";
import Contact from "./views/register.jsx";
import EditContact from "./component/editContact.jsx";


//create your first component
const routes = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/contact",
		element: <Contact/>
	},
	{
		path: "/edit/:theid",
		element: <EditContact/>
	}
])

const Layout = () => {
	return (
		
		<RouterProvider router={routes}/>
		
	);
};

export default Layout;
