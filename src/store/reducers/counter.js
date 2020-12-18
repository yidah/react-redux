import * as actionTypes from '../actions';

const initialState={
    counter:0
}

const reducer = (state= initialState, action)=>{
    // no need to add break as return exits the function 
    switch (action.type) {
        case actionTypes.INCREMENT:
            return{
                // This simply tells javascript return a javascript object,
                // take all the properties and values of the state argument which is our old state,
                // distribute these properties with their values in this new object 
                // and then since we define an additional property, add this property to the object 
                // or if it already was present due to us distributing the old state overwrite this, 
                // leave results object untouched.
                ...state,
                counter: state.counter + 1
     
            } 
        case actionTypes.DECREMENT:
            return{
                ...state,
                counter: state.counter - 1
         
            }
        case actionTypes.ADD:
            return{
                ...state,
                counter: state.counter + action.value             
            }    
        case actionTypes.SUBTRACT:
            return{
                ...state,
                counter: state.counter - action.value            
            }                          
        // I wonder if this is possible so we avoid the eslint warning 
        default:
            return state;
    }
    // return state;
}

export default reducer;
