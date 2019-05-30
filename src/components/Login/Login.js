// Dependencies
import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

// Assets
import './Login.css';

// Tools
import { 
  alertaRest, 
  alerta, 
  setHeader, 
} from '../Tools';

class Login extends Component{

  state = {
    user: '',
    pass: '',
    users: []
  }
  
  clearState = () => {
    this.setState({
      user: '',
      pass: ''
    })
  }


  login = (e) => {
    const { user, pass } = this.state;
    let body = JSON.stringify({
      user, pass
    })
    e.preventDefault();

    if (user && pass) {

      if(user != "linktic" || pass != "12345678"){
        alerta('Access denied','error');              
        this.clearState();
        this.nameInput.focus();
      }            
      else{
        alerta('Access Allowed','success');
        fetch(`http://www.mocky.io/v2/5cd41e3635000089007a531b/login`)
          .then(res => res.json())
          .then(data => {
            if (data) {
              this.setState({ users: data })              
            }          
          });
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render(){

    const { users } = this.state;

    if (users.Auth) {
      return (<Redirect to={'/hotpcode'} />)
    }

    return(
      <div>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-6">

              <h3>Login</h3>

              <form onSubmit={this.login}>
              
                <input
                  type="text"
                  name="user"
                  placeholder="User"
                  onChange={this.handleChange}
                  value={this.state.user}
                  className="form-control"
                  aria-describedby="user"   
                  ref={(input) => { this.nameInput = input; }} 
                  required
                />              

                <input
                  type="password"
                  name="pass"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={this.state.pass}
                  className="form-control"
                  aria-describedby="pass"
                  required
                />

                <br/>

                <button
                  className="btn btn-primary float-right"
                  type="submit">
                  Login
                </button>
              </form>
                         
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-6">

              <div className="box">
                <p>
                  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                </p>

                <button
                  className="btn btn btn-outline-primary"
                  type="button">
                  <i className="fas fa-cog"></i>
                </button>
              </div>

            </div>
          </div>

          
        </div>        
      </div>
    )
  }
}

export default Login;