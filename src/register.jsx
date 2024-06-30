import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';




function Registerform() {
  const [firstname, setFirstname] = useState(null);
  const [secondname, setSecondname] = useState(null);
  const [Email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const handleFirstNameChange = (event) => {
    setFirstname(event.target.value);
  };
  const handleSecondNameChange = (event) => {
    setSecondname(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  function click(event) {
    event.preventDefault(); 
    const newdata={
      firstname, 
      secondname, 
      Email, 
      password
    }
    axios.post("https://password-reset-oxnv.onrender.com/", newdata)
      .then(() => {
        setFirstname("");
        setSecondname("");
        setEmail("");
        setPassword("");
        navigate("/login");
      })
      .catch(error => {
        console.error("There was an error creating the account!", error);
      });
    }
      return (
    <div className="registerpage">
      <form action="/action_page.php" className="was-validated">
        <div className="mb-3 mt-3">
          <label for="First Name" className="form-label">
            First Name:
          </label>

          <input
            type="text"
            className="form-control"
            id="fname"
            placeholder=" First Name"
            name="fname"
            onChange={handleFirstNameChange}
            required
          />
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="mb-3 mt-3">
          <label for="Second Name" className="form-label">
            Second Name:
          </label>

          <input
            type="text"
            className="form-control"
            id="lname"
            placeholder=" Second Name"
            name="lname"
            onChange={handleSecondNameChange}
            required
          />
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="mb-3 mt-3">
          <label for="email" className="form-label">
            Email:
          </label>

          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            onChange={handleEmailChange}
            required
          />
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <div className="mb-3">
          <label for="pwd" className="form-label">
            Password:
          </label>

          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            name="password"
            onChange={handlePasswordChange}
            required
          />
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={click}>
          Register Now
        </button>
        <p>
          Already Have An Account?
          <a
            style={{ color: "rgb(0, 0, 255)" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Registerform;
