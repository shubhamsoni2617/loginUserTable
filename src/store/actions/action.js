import axios from 'axios'
import history from '../../history'



const authStart=()=>{
    return {
        type:'AUTH_START'
    }
}

const authSuccess=(token, userId)=>{
    return {
        type:'AUTH_SUCCESS',
        payload: {
            token,
            userId
        }
    }
}

const authFail=(error)=>{
    return {
        type:'AUTH_FAIL',
        payload: error
    }
}

export const login =(authData)=>async (dispatch)=>{
        dispatch(authStart());
   try{ const response= await axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAYMtOiqk5Vxj-HCi_hr89QQeVTF90JNdA', authData);

     console.log(response)
     dispatch(authSuccess(response.data.idToken, response.data.localId))
    history.push('/user')
    }
     
   catch(error){
            dispatch(authFail(error.response.data.error.message))
            console.log(error.response.data.error.message)
     }
}

export const fetchDataStart=()=>{
    return {
        type: 'FETCH_DATA_START'
    }
}

export const userData=(token)=> async dispatch=>{
        dispatch(fetchDataStart());
    let response= await axios.get('https://appinesstask.firebaseio.com/user.json?auth='+token)

        let userDataArr=[];
        for(let key in response.data){
                userDataArr.push({...response.data[key]})
        }
        console.log(response.data)
    

        dispatch({
            type: 'USER_DATA',
            payload: response.data
        })

} 


