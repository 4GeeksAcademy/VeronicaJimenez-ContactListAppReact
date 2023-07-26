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
            const editstate = action.payload
            console.log('editstate', editstate)
            const  elementToUpdate = state.find((_, index) => index == editstate.id);
            
            
            if (elementToUpdate){
           
            //elementToUpdate.editstate = editstate.editItem
            console.log('elementToUpdate',elementToUpdate)
            console.log("editstate con editItem", editstate.editItem)
            }

            //console.log('actionupdate',action.payload)
            // const newIndex = state.findIndex((_,index) => index === action.payload)
            // state[newIndex] = {
            //     ...state[newIndex],
            //     ...action.payload,
            //}
            
        },

        deleteContact:(state, action) => {
           
            return state.filter((_, index) => index !== action.payload);   
            

        },
       
    }
})

//action creators are generated for each case reducer funtion
export const { addContact, updateContact, deleteContact } = contactSlice.actions;
export default contactSlice