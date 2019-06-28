import React from 'react';
import { Link } from 'react-router-dom'

const UserData=(props)=>{
    let allUsers=null;

  if(props.loading===null){
     allUsers=  <div>
                    <h1>Please Log In to view this page...</h1>
                    <Link to='/'><button>Log In</button></Link>
              </div>
  }
  if(props.loading===true){
      allUsers='Loading...'
  }
              
   if(props.userDetail.length>0){

          let objKey=Object.keys(props.userDetail[0])

          let user= props.userDetail.map(obj=>{
                return <tr key ={obj.id}>
                          { objKey.map(prop=><td key={obj[prop]} label={obj[prop]}>{obj[prop]}</td>)}
                      </tr>
            })

              allUsers= <>
                  <table className="ui celled table">
                      <thead>
                        <tr>
                        { objKey.map(prop=>
                            <th key={prop} label={prop}>{prop.charAt(0).toUpperCase()+ prop.slice(1)}</th>)}
                          
                        </tr>
                      </thead>
                      <tbody>
                        {user}
                      </tbody>
                  </table> </>
      }
                          
     
// console.log(user)

    return ( 
      <>
         {allUsers}
      </>
      
    )
}

export default UserData;