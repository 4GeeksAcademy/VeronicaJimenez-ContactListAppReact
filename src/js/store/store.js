
import { configureStore } from "@reduxjs/toolkit";
import { contactsList } from "./slice/contactsSlice";

export const store = configureStore({
    reducer :{
        contact: contactsList.reducer,
    }
});

export default store