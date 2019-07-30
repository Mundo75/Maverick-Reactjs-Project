import React, { Component } from 'react';
import "./login.css";


class Login extends Component {

    render() {
        return (
            <div className="container">

                <div className="user-input">
                    <h4>Sign in to continue</h4>

                    <form>

                        <div className="form-group">

                            <label htmlFor="empId">Employee ID</label>
                            <input type="text" className="form-control" id="empIdInput" placeholder="Enter ID"/>

                        </div>

                        <div className="form-group">

                            <label htmlFor="empPassword">Password</label>
                            <input type="password" className="form-control" id="passwordInput" placeholder="Password"/>

                        </div>

                        <a className="btn btn-secondary" href="/search" role="button" type="submit" id="login-btn">Login</a>

                    </form>

                </div>
                <a className="demo" href="javascript:window.open('https://www.youtube.com/watch?v=KQA5ihzNnZQ', '_blank', 'height=600,width=400');" type="button">DEMONSTRATION</a>"
            </div>
          );

    }
  
}

export default Login;