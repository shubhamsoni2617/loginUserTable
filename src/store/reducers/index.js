import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form'
import auth from './auth';

import userDetail from './userData'



export default (
    combineReducers({
        form,
        auth,
        userDetail
    })
)