import { createSlice } from "@reduxjs/toolkit";

// const initialList = {
     
      
// }

export const contactsList = createSlice({
    name: "contact",
    initialState :{
        user:
        [{
            name: "Veronica",
            email: "vero@ejemplo.com",
            phone: "352-99",
            address: "ecu"
        }]
          
    },
    reducer:{
         
        
        addContact: state => {
            state.user.push({
                name: "Valeria",
                email: "vale@ejemplo.com",
                phone: "444-99",
                address: "col" 
            })

        },
        updateContact:(state) => {
            
        },

        deleteContact:(state) => {
            
        },
    }
})

//action creators are generated for each case reducer funtion
export const { addContact, updateContact, deleteContact } = contactsList.actions;