
import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./slice/contactsSlice";

const store = configureStore({
    reducer :{
        contact: contactSlice.reducer,
    }
});

export default store