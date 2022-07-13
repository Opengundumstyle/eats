import React from 'react';

class SessionForm extends React.Component{
    
     constructor(props){
          super(props);
          this.state ={
             username:'',
             password:'',
             email:''
          }; 
          this.handleSubmit = this.handleSubmit.bind(this)
     }

     handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({},this.state)
        this.props.processForm(user)
     }
   
     update(field){
         return e => this.setState({
            [field]:e.currentTarget.value
         })
     }
   
     renderErrors(){
         return(
             <ul>
                {this.props.errors.map((error,i) => (
                     <li key={`error-${i}`}>
                        {error}
                     </li>
                 ))}
             </ul>
         )
     }
     
     demoLogin(e){
           e.preventDefault();
           this.props.demo();
     }


     render(){
         return (
             <div className="login-form-container">
                 <form onSubmit={this.handleSubmit} className="login-form-box">
                    welcome to Eats!
                      <br/>
                       Please {this.props.formType} or {this.props.navLink}
                        {this.renderErrors()}
                        <div classNmae="login-form">
                            <br/>
                         <label>Username:
                              <input type="text" 
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                                />
                         </label>
                         <br />
                        <label>Password:
                            <input type="password"
                              value={this.state.password}
                              onChange={this.update('password')}
                              className='login-input'
                              />
                        </label>
                        <br />
                         {this.props.formType === 'signup' ? 
                             <label>Email:
                             <input type="text" 
                               value={this.state.email}
                               onChange={this.update('email')}
                               className="login-input"
                               /> 
                        </label> : ""
                         }
                        
                        <br />
                          <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                 </form>
                  <button onClick={e=>this.demoLogin(e)} className="demo-login-box">Demo User</button>
             </div>
          )
       }
     }

     export default SessionForm;