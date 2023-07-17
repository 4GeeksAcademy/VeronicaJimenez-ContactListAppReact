import React from "react";
import { ReactDOM } from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./views/home";
import Contact from "./views/register.jsx";



//create your first component
const routes = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/contact",
		element: <Contact/>
	}
])

const Layout = () => {
	return (
		<React.StrictMode>
			<RouterProvider router={routes}/>
		</React.StrictMode>
	);
};

export default Layout;
