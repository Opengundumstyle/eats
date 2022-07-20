import React from 'react';
import {Link} from 'react-router-dom'
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

    componentWillUnmount(){
         this.props.clearErrors()
    }
    
     render(){
         return (
            <div>
            <header>
            <Link to="/" className="header-link"> <img className='logo' src={window.logoURL} alt="logo"/> </Link>
           </header>
            
             <div className="login-form-container">
                 <form onSubmit={this.handleSubmit} className="login-form-box">
               
             <div className='session-title'>{this.props.title}</div>
                { this.props.formType === 'login'? 
                 <div className='top-link'>{this.props.navLink}
                                             </div>: ''}
                        {this.renderErrors()}
                        <div className="login-form">
                            <br/>
                          
                         <label>
                              <input type="text" 
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                                placeholder='Username:'
                                />
                         </label>
                         <br />
                        <label>
                            <input type="password"
                              value={this.state.password}
                              onChange={this.update('password')}
                              className='login-input'
                              placeholder='Password:'
                              />
                        </label>
                        <br />
                         {this.props.formType === 'signup' ? 
                             <label>
                             <input type="text" 
                               value={this.state.email}
                               onChange={this.update('email')}
                               className="login-input"
                                placeholder='Email:'
                               /> 
                        </label> : ""
                         }
                        <br />
                          <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                 </form>
                 { this.props.formType === 'login'?
                  <button onClick={e=>this.demoLogin(e)} className="demo-login-box">Demo User</button> 
                  :''}
                   
                   <div className='foot-link'>{this.props.navLink}</div>
             </div>
             </div>
          )
       }
     }

     export default SessionForm;