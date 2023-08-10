import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const URL = 'https://playground.4geeks.com/apis/fake/contact';

const initialState = {
    contacts: [],
    status: 'idle', 
    error: null
}
export const fetchContacts = createAsyncThunk('contact/fetchContacts', async () => {
    const fetchcall = await fetch(URL+"/agenda/agenda_vjim", {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        })
    const response = await fetchcall.json()	
    return response
})

 export const addNewContact = createAsyncThunk('contact/addNewContact', async (values) => {
     const fetchcall = await fetch(URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            full_name: values.full_name,
            email: values.email,
            phone: values.phone,
            address: values.address,
            agenda_slug: "agenda_vjim",
        })
                        
        })
     const response = await fetchcall.json()	
     
     return response
 })

 export const updateContact = createAsyncThunk('contact/updateContact', async (values) => {
     
     console.log("values update", values)
     try {
         const fetchcall = await fetch(`${URL}/${values.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                full_name: values.full_name,
                email: values.email,
                phone: values.phone,
                address: values.address,
                agenda_slug: "agenda_vjim",
            })
        })
         const response = await fetchcall.json()   
         console.log("response updatecontact",response)                
         return response
     } catch (err) {
         //return err.message;
         return values; 
     }
 })

 export const eraseContact = createAsyncThunk('contact/eraseContact', async (values) => {
    //  const { id } = values;
    // console.log("values", values)
     try {
        const fetchcall = await fetch(`${URL}/${values}`, {
            method: 'DELETE',                                 
            })
        const response = await fetchcall.json()	
        return response
     } catch (err) {
         return err.message;
     }
 })

 

const contactSlice = createSlice({
    name: "contact",    
    initialState,
    reducers:{                            
        // updateContact:(state, action) => {
        //     const editedContact = action.payload
        //     console.log('editedContact', editedContact)
        //     const  elementToUpdate = state.contacts.find((_, index) => index == editedContact.newId);
            
            
        //     if (elementToUpdate){
           
        //     elementToUpdate.full_name = editedContact.editItem.full_name
        //     elementToUpdate.email = editedContact.editItem.email
        //     elementToUpdate.phone =  editedContact.editItem.phone
        //     elementToUpdate.address =  editedContact.editItem.address
        //    }          
            
        // },

        // deleteContact:(state, action) => {

        //     console.log("action", action)
        //     console.log("state contacts",state.contacts)
        //     return state.contacts.filter((item) => item.id !== action.payload);              
            
        // },        
       
    },
    extraReducers(builder) {
        builder
            .addCase(fetchContacts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Adding data                             
                state.contacts = action.payload
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewContact.fulfilled, (state, action) => {
                state.contacts= action.payload;
            })
            .addCase(eraseContact.fulfilled, (state, action) => {
                state.contacts= action.payload;
            })
            .addCase(updateContact.fulfilled, (state, action) => {
                state.contacts= action.payload;
            })
    }
        
})

// export state
export const selectContacts = (state) => state.contact.contacts;
export const getContactsStatus = (state) => state.contact.status;
export const getContactsError = (state) => state.contact.error;


//action creators are generated for each case reducer funtion
export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice