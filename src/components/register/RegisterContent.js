import React, { Component } from 'react'
import './RegisterContent.css'

class RegisterContent extends Component {

    state = {
        name:'',
        email:' ',
        password:' ',
        confirmpass:' ',
    formError:{
        name:"Name is Required",
        email:"Email is Required",
        password:'Password is Required',
        confirmpass : 'Please enter your password ',
    },
    errorMessages:""

};
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    componentDidMount() {
        this.inputRef.current.focus();
    }

tfHandler = (evt) => {
    let { name, value } = evt.target;
    this.setState({ [name]: value });
    let { formError } = this.state;

    switch (name) {
        case "name":
            if (!value || value.length === 0) {
                formError.name = "Name is Required"
            } else if (value.length < 3 || value.length > 20) {
                formError.name = "Name must be between 3 to 20 chars"
            } else {
                formError.name = "";
            }
            break;
        case "email":
                if (!value || value.length === 0) {
                    formError.email = "Email Required"
                } else if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    formError.email = "Email format is invalid"
                } else {
                    formError.email = "";
                }
                break;
         case "password":
            if (!value || value.length === 0) {
                    formError.password = "Password Required"
                } else if (!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i)) {
                    formError.password =  "Password must contain atleast one number, one uppercase and lowercase letter, and at least 8 or more characters"

                } else {
                    formError.password = "";
                }
                break;
         case "confirmpass":
                if (!value || value.length === 0) {
                    formError.confirmpass = "Please enter your password";
                }
                else if (value !== this.state.password){
                    formError.confirmpass = "Please Unmatch! Please re-enter";
                }
                else {
                    formError.confirmpass = "";
                }
                    break;

        default:

            break;
    }
}

    render() {

        return (
            <div className="register-container">
                <div className="signup-heading">
                    <h2>Signup</h2>
                    <p>We don't share your personal details with anone</p>
                    {this.state.formError.name || this.state.formError.email || this.state.formError.password || this.state.formError.confirmpass ?
                        <div className="alert alert-danger error">
                        Error Warning!
                        <ul>
                            <li> {this.state.formError.name} </li>
                            <li> {this.state.formError.email} </li>
                            <li> {this.state.formError.password} </li>
                            <li> {this.state.formError.confirmpass} </li>
                        </ul>
                        </div>
                        :
                        <div className="alert alert-success">
                            Success !
                        </div>
                    }
                </div>
                <div>
                    <form className="form-floating signup-form">
                        <label htmlFor="floatingInputValue">First Name*</label>
                        <input type="text" name="name" className="form-control" id="firstName" value={this.state.name} onChange={this.tfHandler} ref={this.inputRef} />
                        <label htmlFor="floatingInputValue">Last Name</label>
                        <input type="text" className="form-control" id="lastName" />
                        <label htmlFor="floatingInputValue">Email*</label>
                        <input type="email" name="email" className="form-control" id="email" onChange={this.tfHandler} />
                        <label htmlFor="floatingInputValue">Password*</label>
                        <input type="password" name="password" className="form-control" id="password" onChange={this.tfHandler} />
                        <label htmlFor="floatingInputValue">Confirm Password*</label>
                        <input type="password" name="confirmpass" className="form-control" id="confirmpass" onChange={this.tfHandler} /><br />
                        <button type="button" class="btn btn-danger">Signup</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterContent;