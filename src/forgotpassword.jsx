import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";


function ForgotPassword() {
    const navigate = useNavigate();
    const [email,setEmail]=  useState(null);
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };    
 
      const click = async () => {
        console.log(email);
        setEmail(null);
        const length = 10; 
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        await console.log(result);
        navigate("/reset"); 
      };
  return (
    <Form className='forgotpassword'>
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={handleEmailChange}/>
      </Form.Group>
      <Button type="submit" onClick={click}>Send To Mail</Button>

      </Form>
  )
}

export default ForgotPassword;