import React, { Component} from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history';

import { login, userData } from '../store/actions/action'

import UserData from './UserData'
import Login from './Login'

class App extends Component{


  onSubmit=(formValues)=>{
      this.props.login(formValues).then(()=>this.props.userData(this.props.token))
  }

  render(){
     return (
        <div>

          <Router history={history}>
            <Route path='/' exact render={()=><Login onSubmit={this.onSubmit} authLoading={this.props.authLoading}/>}/>
            <Route path='/user' exact render={()=><UserData 
                userDetail={this.props.userDetail} loading={this.props.loading} />}/>
          </Router>

        
        </div>
   
        
     
    )
  }
}

const mapStateToProps=(state)=>{
    console.log(state)
  return {
    token : state.auth.token,
    authLoading: state.auth.loading,
    userDetail: Object.values(state.userDetail.userdata),
    loading: state.userDetail.loading
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    login : (loginData)=>dispatch(login(loginData)),
    userData:(token)=>dispatch(userData(token))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
