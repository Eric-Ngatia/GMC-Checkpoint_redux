import { createStore } from "redux";
import rootReducer from '../Reducers/Reducer';


let store = createStore(rootReducer);

export default store;