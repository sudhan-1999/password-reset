import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function ForgotPassword() {
    const navigate = useNavigate();
    const [email,setEmail]=  useState(null);
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
      function click(){
        console.log(email)
        setEmail(null);
        navigate("/reset");
      }
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={handleEmailChange}/>
      </Form.Group>
      <Button type="submit" onClick={click}>Send To Mail</Button>

      </Form>
  )
}

export default ForgotPassword;