import React, { Component } from 'react';
// import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form';

// import { login } from  '../store/actions/action'


class LoginForm extends Component{


    renderError=({touched, error})=>{
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderField=({input, label, type, meta})=>{

        const className=`field ${meta.error && meta.touched?'error':''}`    
       
        return (
            <div className={className}>
                
                <label>{label}</label>
                <input {...input} type={type}/>
                {this.renderError(meta)}
            </div>
        )
        
    }

    onSubmit=(formValues)=>{
        console.log(formValues);

        this.props.onSubmit({...formValues, returnSecureToken: true})

        // this.props.login({...formValues, returnSecureToken: true})
    }

    render(){
       let formData= <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" 
                style={{width: '30%', textAlign:'center', margin:'30px 0 0 50px', padding: '10px', backgroundColor:'sky blue'}}>
                <Field name="email" type="email" component={this.renderField} label="Enter Your Email"/>
                <Field name="password" type="password" component={this.renderField} label="Enter Your Password"/>
                <button className="ui button primary" >Submit</button>
            </form>
       
     if( this.props.authLoading){
         formData=<h1>Load For Authentication Success</h1>
     }
        return (<>
                  {formData}
                </>
        )
    }
}  

const validate=(formValues)=>{
    let error={};
    if(!formValues.email){
        error.email='Please, Enter your Email ID'
    }
    if(!formValues.password){
        error.password='Please, Enter password'
    }
    if(formValues.password && formValues.password.length<6){
        error.password='Please, Enter Valid Password'
    }
    if(formValues.email && !formValues.email.match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)){
        error.email='Please Enter correct Email'
    }

    return error
}

// const loginForm=reduxForm({form:'loginForm', validate})(LoginForm)

// const mapDispatchToProps=(dispatch)=>{
//     return {
//         login : (loginData)=>dispatch(login(loginData))
//     }
// }



// export default connect(null, mapDispatchToProps)(loginForm);

export default reduxForm({form:'loginForm', validate})(LoginForm)
