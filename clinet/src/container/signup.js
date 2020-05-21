
import React,{ useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Checkbox } from "react-bootstrap";
import './signup.css'


export default function SignUp() {

    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remeberme, setRemeberme] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

        return (
            <div className="Signup">
            <form>
                {/* <h3>Sign Up</h3> */}
                <FormGroup controlId="fname" bsSize="large">
                <ControlLabel>First Name</ControlLabel>
                <FormControl
                    autoFocus
                    type="text"
                    value={fname}
                    onChange={e => setFirstName(e.target.value)}
                />
                </FormGroup>
                <FormGroup controlId="lname" bsSize="large">
                <ControlLabel>Last Name</ControlLabel>
                <FormControl
                    autoFocus
                    type="text"
                    value={lname}
                    onChange={e => setLastName(e.target.value)}
                />
                </FormGroup>
                <FormGroup controlId="email" bsSize="large">
                <ControlLabel>Email</ControlLabel>
                <FormControl
                    autoFocus
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                    autoFocus
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                </FormGroup>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Sign Up
                </Button>
                {/* <button type="submit" className="btn btn-primary btn-block">Sign Up</button> */}
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </form>
            </div>
        );
    }
