import { combineReducers } from 'redux';
import authReducer from './authReducer';
import popReducer from './popReducer';

const allReducers = combineReducers({
    auth: authReducer,
    flash: popReducer
});

export default allReducers;