import React, { Component } from "react";
import { hot } from "react-hot-loader";
import InputField from "../component/inputField.js";

import "../style/app.css";

class App extends Component {

  onSubmit = () => {

  }

  loginBody = () => {
    if(window.isUndefined(this.loginBodyDom)){
      this.loginBodyDom = (
        <div id="login-data">

          <InputField
            imageSrc = "/images/users.svg"
            type = "text"
            name = "user-name"
            placeholder = "Email id / Mobile Number" />

          <InputField
            imageSrc = "/images/lock.svg"
            type = "password"
            name = "password"
            placeholder = "Password" />

        </div>);
    }
    return this.loginBodyDom;
  }

  signupBody = () => {
    if(window.isUndefined(this.signupBodyDom)){
      this.signupBodyDom = (
        <div id="signup-data" style={{display:"none"}}>

          <InputField
            imageSrc = "/images/users.svg"
            type = "text"
            name = "user-name"
            placeholder = "Email id" />

          <InputField
            imageSrc = "/images/users.svg"
            type = "text"
            name = "user-name"
            placeholder = "Mobile Number" />

          <InputField
            imageSrc = "/images/lock.svg"
            type = "password"
            name = "password"
            placeholder = "password" />
        </div>)
    }
    return this.signupBodyDom;
  }

  signUpClicked = () => {
    console.log("Hellana");
    this.hideLogin();
    this.showSignup();
  }

  loginClicked = () => {
    this.showLogin();
    this.hideSignup();
  }

  showSignup = () => {
    document.getElementById("signup-data").style.display = "block";
  }

  showLogin = () => {
    document.getElementById("login-data").style.display = "block";
  }

  hideSignup = () => {
    document.getElementById("signup-data").style.display = "none";
  }

  hideLogin = () => {
    document.getElementById("login-data").style.display = "none";
  }

  render() {
    return (
      <div class="login-body">
        <div class="block-center homepage_admin">
          <div class="login-form">

            <div class="login-form-child">
              <div class="eq-split-parent">
                <div class="eq-split-child toggle" onClick={this.signUpClicked}>Sign UP</div>
                <div class="eq-split-child toggle" onClick = {this.loginClicked}>Log IN</div>
              </div>
            </div>

            {this.loginBody()}
            {this.signupBody()}

            <button class="submit-button block-center" type="button" onclick=""> Login </button>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);