import * as actionTypes from '../actions/actions';

const initialState={
    results:[]
}

const reducer = (state= initialState, action)=>{
    // no need to add break as return exits the function 
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                // concat return a new array we should never use push as this will alter the original object 
                // we want to update our state immutably
                results: state.results.concat({id: new Date(), value:action.res})           
            }    
        case actionTypes.DELETE_RESULT:
            // // ALTERNATIVE  1 one to update immutably 
            // const id=2;
            // // we create a copy of the new array
            // // the elements in state "results" are objects ({id: new Date(), value:state.counter}) and still pointing to the same objects
            // // if we change a property in one of the elements just creating a new array is not enough 
            // // as we plan on removing an object this is ok
            // const newArray = [...state.results]  
            // newArray.results.splice(id,1)
            
            // COMMON ALTERNATIVE
            // filter return a new array
            const updatedArray = state.results.filter(result=>result.id !== action.resultElId);
            return{
                ...state,
                // results: newArray // ALTERNATIVE  1 
               
                // COMMON ALTERNATIVE     
                results: updatedArray
            }                         
        // I wonder if this is possible so we avoid the eslint warning 
        default:
            return state;
    }
    // return state;
}

export default reducer;
