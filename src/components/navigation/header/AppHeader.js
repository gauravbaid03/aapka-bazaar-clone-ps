import React, { Component } from 'react'

import './AppHeader.css';

class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.states= {
            // signin: "SignIn",
            register: "Register"
        }
    }

    render() {

        return(
            <div className="header">
                <a href="./"><img src="static/images/logo.png" alt="logo"/></a>
                <div className="left-nav">
                    <a href="./" id="home" className="nav-links">Home</a>
                        <a href="./products" id="products" className="nav-links">Products</a>
                </div>
                <div className="right-nav">
                        <a href='./signin'className = "nav-right-links" id="signin">{this.props.signin()}</a>
                        <a href='/register'className = "nav-right-links" id="register">{this.states.register}</a>

                    <div className="cart">
                        <img src="static/images/cart.svg" alt="cart-logo"/>
                        0 items
                    </div>
                </div>
            </div>
        )
    }
}

export default AppHeader;