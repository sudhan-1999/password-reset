import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Login() {
    const navigate = useNavigate();
    const [Email,setEmail]=  useState(null);
  const [password,setPassword]=  useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  function click(event){
    event.preventDefault(); 
    const newdata={
      Email,
      password
    }
    axios.post("https://password-reset-oxnv.onrender.com/login",newdata)
    .then((res)=>{
      console.log(res.message);
      setEmail("");
      setPassword("");
      navigate("/logedin");
    })
   
  }
  return (
    <Form className='login'>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={handleEmailChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
      </Form.Group>
      <Button type="submit" onClick={click}>Login</Button>
      <p><a onClick={()=>{navigate("/forgotpassword");}} >Forgot Password?</a></p>

    </Form>
  );
}

export default Login;