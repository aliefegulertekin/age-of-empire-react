import {createStore} from 'redux';

const dataStore = (state={}, action) => {

  switch (action.type) {
    case 'ADD_UNIT': 
    return state.item }
  
  
}
const store = createStore(dataStore);

export default dataStore;