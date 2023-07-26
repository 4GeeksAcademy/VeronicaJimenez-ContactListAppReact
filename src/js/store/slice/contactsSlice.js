import { createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";


const contactSlice = createSlice({
    name: "contact",
    initialState :
        [
        {
            name: "Veronica",
            email: "vero@ejemplo.com",
            phone: "352-99",
            address: "ecu"
        }]
          
    ,
    reducers:{
            
        addContact: (state, action) => {
            console.log("add state", state)
            
            state.push(action.payload);
        },
        updateContact:(state, action) => {
            const editedContact = action.payload
            console.log('editedContact', editedContact)
            const  elementToUpdate = state.find((_, index) => index == editedContact.id);
            
            
            if (elementToUpdate){
           
            elementToUpdate.name = editedContact.editItem.name
            elementToUpdate.email = editedContact.editItem.email
            elementToUpdate.phone =  editedContact.editItem.phone
            elementToUpdate.address =  editedContact.editItem.address
           }          
            
        },

        deleteContact:(state, action) => {
           
            return state.filter((_, index) => index !== action.payload);              

        },
       
    }
})

//action creators are generated for each case reducer funtion
export const { addContact, updateContact, deleteContact } = contactSlice.actions;
export default contactSlice