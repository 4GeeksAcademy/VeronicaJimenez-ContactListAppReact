//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from './layout.js'

// import for using redux
import store from './store/store';
import { Provider } from 'react-redux';

//
const root = createRoot(document.querySelector("#app"))

//render your react application

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Layout/>
        </Provider>
    </React.StrictMode>
    
    )

