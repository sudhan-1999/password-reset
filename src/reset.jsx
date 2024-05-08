import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Reset() {
    const navigate = useNavigate();

    const [password,setPassword]=  useState(null);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      function click(){
        console.log(password)
        setPassword(null);
        navigate("/login");
      }
    
  return (
    <form className='reset'>
    <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label> New Password : </Form.Label>
        <Form.Control type="password" placeholder=" New Password" onChange={handlePasswordChange}/>
      </Form.Group>
      <Button type="submit" onClick={click}>Reset Password</Button>
      </form>

  )
}

export default Reset;