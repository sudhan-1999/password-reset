import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from 'axios';


function ForgotPassword() {
    const navigate = useNavigate();
    const [Email,setEmail]=  useState(null);
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };    
 
      function click(event)  {
        event.preventDefault(); 
        axios.post("http://localhost:5000/forgotpassword",{Email})
        .then(()=>{ setEmail("");
          navigate("/page"); 
        })
      };
  return (
    <Form className='forgotpassword'>
    <Form.Group className="mb-3 was-validated" controlId="formGroupEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={handleEmailChange} required/>
      </Form.Group>
      <Button type="submit" onClick={click}>Send To Mail</Button>

      </Form>
  )
}

export default ForgotPassword;