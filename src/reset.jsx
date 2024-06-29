import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Reset() {
    const navigate = useNavigate();
    
    const [Email,setEmail]=useState("")
    const [password,setPassword]=  useState("");
    const [newpassword,setNewpassword]=useState("")

    const handleemailChange=(event)=>{
      setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
      const handlenewPasswordChange = (event) => {
        setNewpassword(event.target.value);
      };
    
      const newdata = {Email,password,newpassword}
      function click(){
        event.preventDefault(); 
        try{
          axios.post("http://localhost:5000/reset",newdata)
          .then(()=>{ setEmail("");
            setPassword("");
            setNewpassword("")
            navigate("/login");})
       
        }catch(err){
          console.log(err);
        }
      }
    
  return (
    <form className='reset'>
      <Form.Group className="mb-3" controlId="formGroupemail">
        <Form.Label>  Email Id : </Form.Label>
        <Form.Control type="email" placeholder="  email" onChange={handleemailChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label> Enter Password Sent to Your Mail : </Form.Label>
        <Form.Control type="password" placeholder="  Password" onChange={handlePasswordChange}/>
      </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label> New Password : </Form.Label>
        <Form.Control type="password" placeholder=" New Password" onChange={handlenewPasswordChange}/>
      </Form.Group>
      <Button type="submit" onClick={click}>Reset Password</Button>
      </form>

  )
}

export default Reset;