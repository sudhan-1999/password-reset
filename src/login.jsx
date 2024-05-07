import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const [email,setEmail]=  useState(null);
  const [password,setPassword]=  useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  function click(){
    console.log(email,password)
    setEmail(null);
    setPassword(null);
    navigate("/logedin");
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={handleEmailChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
      </Form.Group>
      <Button type="submit" onClick={click}>Login</Button>
      <p><a onClick={()=>{navigate("/reset");}} >Forgot Password?</a></p>

    </Form>
  );
}

export default Login;