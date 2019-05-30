// Dependencies
import React, { Component } from 'react';

// Assets
import "./Hotpcode.css";

class Hotpcode extends Component{

  state = {
    code: ''
  }
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render(){

    return(
      <div>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-6">

              <div className="box">
              
                <h3>Login</h3>
                <p>
                  Two seep authentication required for this login for this user
                </p>  
                <input
                  type="text"
                  name="code"
                  placeholder="Code"
                  onChange={this.handleChange}
                  value={this.state.code}
                  className="form-control"
                  aria-describedby="code"                
                  required
                />   

                <button
                  className="btn btn btn-outline-primary"
                  type="button">
                  Continue
                </button>      
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hotpcode;

