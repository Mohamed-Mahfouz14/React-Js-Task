import React from "react";
import { Component } from "react";
import "./App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";

class App extends Component {
  render() {
    return (
      <Form className="login-form">
        <h1>
          <span className="font-weight-bold">gomycode</span>.com
        </h1>
        <h2 className="text-center">Welcome</h2>
        <FormGroup className="mt-3 mb-3">
          <Label>Email</Label>
          <Input type="email" placeholder="Email" />
        </FormGroup>

        <FormGroup className="mt-3 mb-3">
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </FormGroup>
        <div>
          <Button color="secondary" style={{ display: "block" }}>
            Log in
          </Button>
        </div>

        <div className="text-center pt-3">
          Or continue with your social account
        </div>
        <FacebookLoginButton />
      </Form>
    );
  }
}

export default App;
