import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Registerform() {
  const [fname,setFname]=  useState(null);
  const [lname,setLname]=  useState(null);
  const [email,setEmail]=  useState(null);
  const [password,setPassword]=  useState(null);
  const navigate = useNavigate();

  const handleFirstNameChange = (event) => {
    setFname(event.target.value);
  };
  const handleSecondNameChange = (event) => {
    setLname(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  function click(event){
    event.preventDefault(); // Prevents default form submission behavior
    console.log(fname, lname, email, password);
    setFname(null);
    setLname(null);
    setEmail(null);
    setPassword(null);
    navigate("/login");
  }
  return (
    <Form>
       <Form.Group className="mb-3" controlId="formGroupFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" onChange={handleFirstNameChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupSecondName">
        <Form.Label>Second Name</Form.Label>
        <Form.Control type="text" placeholder="Second Name" onChange={handleSecondNameChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
      </Form.Group>
      <Button type="submit" onClick={click}>Register</Button>
      <p>
        Already Have An account?:
        <a
          onClick={() => {
            navigate("/login");
          }}
          style={{ color: "blue" }}
        >
          login
        </a>
      </p>
    </Form>
  );
}

export default Registerform;
