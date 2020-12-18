import * as actionTypes from './actionTypes';
// ACTION CREATORS - name shuld be camel case 

// 1. Synchronous action creator
export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        res:res
    }
}
// 2. Asynchronous action creator
export const storeResult = (res) => {
    // using thunk middleware
    // receives a dispatch action
    return dispatch => {
        //here we execute our async code
        setTimeout(()=>{
            //dispatch whatever action we want to dispatch
            // this dispatch(storeResult) will create an infinite loop so 
            // we need a sync action creator step 1
            dispatch(saveResult(res))
        },2000);
    }
}

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId:resElId
    }
}
   