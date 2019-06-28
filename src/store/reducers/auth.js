import  updateObjects  from './utility'


const initialState={
    loading: null,
    token: null,
    userId: null,
    error: false
}


const authStart=(state, action)=>{
    return updateObjects(state, {
        loading : true
    })
}


const authSuccess=(state, action)=>{
    return updateObjects(state, {
        token: action.payload.token,
        userId: action.payload.userId,
        loading : false
    })
}

const authFail=(state, action)=>{
    return updateObjects(state, {
        token: null,
        userId: null,
        loading: null,
        error: action.payload
    })
}

export default (state=initialState, action)=>{
    switch(action.type){
        case 'AUTH_START': return authStart(state, action);
        case 'AUTH_SUCCESS': return authSuccess(state, action);
        case 'AUTH_FAIL': return authFail(state, action)         
        default: return state
    }
}