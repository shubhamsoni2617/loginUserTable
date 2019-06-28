import updateObjects  from './utility';

const initialState={
    loading : null,
    userdata: {}
}

const fetchDataStart=(state, action)=>{
    return updateObjects(state, {
        loading: true
    })
}

const userData=(state, action)=>{
        return updateObjects(state,{ 
            userdata: action.payload,
            loading: false
        })

}

export default (state=initialState, action)=>{
    switch(action.type){
        case 'USER_DATA': return userData(state, action);
        case 'FETCH_DATA_START': return fetchDataStart(state, action)
        default: return state
    }
}