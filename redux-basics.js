// As we use node we import Redux as below
const redux = require('redux');
const createStore = redux.createStore;

const initialState={
  counter:0
}

// Reducer
const rootReducer = (state=initialState, action) => {
  if(action.type === 'INC_COUNTER'){
    // You return a new javascript object by copying first old state 
    // with the spread operator and then overwrite the one property you want to adjust.
    // If that also would be a javascript object, we would have to copy it first
    // too so that you never mutate any data
    return {
      ...state,
      counter:state.counter + 1
    };
  }
  if(action.type === 'ADD_COUNTER'){
    return {
      ...state,
      counter:state.counter + action.value
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription gets call whenever an action is dispatched and updates the state
store.subscribe(()=>{
  console.log('[Subscription]', store.getState());
});

// Dispatching Action 
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value:10});
console.log(store.getState());

