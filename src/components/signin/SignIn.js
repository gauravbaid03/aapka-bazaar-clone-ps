import React, { Component } from 'react'
// import { useHistory } from "react-router-dom";
// import {Redirect} from 'react-router-dom';
// import AppHeader from '../navigation/header/AppHeader.js'
import '../register/RegisterContent.css'


class SignIn extends Component {

    state = {
        users: []
    };

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    componentDidMount() {
        this.inputRef.current.focus();
    }

    ValidateUser = (evt) => {
        evt.preventDefault();

        const email = document.getElementById("email").value;
        const pass = document.getElementById("pass").value;
        // const history = useHistory();

        const url = "http://localhost:5000/users?email="+email;
            fetch(url)
            .then(resp => resp.json())
            .then(data =>
                {
                    if (data.length === 1 && pass === data[0].password){
                    alert(" You are LoggedIn Successfully ");
                    // <AppHeader signin="Welcome" register="Devinder"/>
                    window.location.href="/";
                    // props.history.push('./')
                    }else{
                    alert("Invalid User Details");
                    }
                }
            )
    }

    render() {

        return (
            <div className="register-container">
                <div className="signup-heading">
                    <h2>SignIn</h2>
                    <p>We don't share your personal details with anyone</p>
                </div>
                <div>
                    <form className="form-floating signup-form">
                        <label for="floatingInputValue">Email*</label>
                        <input type="email" name="email" className="form-control" id="email" ref={this.inputRef} />
                        <label for="floatingInputValue">Password*</label>
                        <input type="password" name="password" className="form-control" id="pass" />
                        <button type="button" class="btn btn-danger" onClick={this.ValidateUser}>SignIn</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;