import React, { Component } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/people.png';
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/padlock.png";

class LoginSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            action: "Sign Up"
        };
    }

    handleActionChange = (newAction) => {
        this.setState({ action: newAction });
    };

    render() {
        const { action } = this.state;
        return (
            <div className='container'>
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action === "Login" ? <div></div> : 
                        <div className="input">
                            <img src={user_icon} alt="user_icon" style={{ width: '15px' }} />
                            <input type="text" placeholder='Name' />
                        </div>
                    }
                    <div className="input">
                        <img src={email_icon} alt="email_icon" style={{ width: '15px' }} />
                        <input type="email" placeholder='E-mail Address' />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="password_icon" style={{ width: '15px' }} />
                        <input type="password" placeholder='Password' />
                        <button type="submit" className='submit-button'></button>
                    </div>
                </div>
                {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => this.handleActionChange("Sign Up")}>Sign Up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => this.handleActionChange("Login")}>Login</div>
                </div>
            </div>
        );
    }
}

export default LoginSignup;
