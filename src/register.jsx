import React from "react";
import { useState } from "react";
import env from "react-dotenv";
import { useNavigate } from "react-router-dom";



function Registerform() {
  //const API = env.MONGO_URL;
  const [fname, setFname] = useState(null);
  const [lname, setLname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
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
  function click(event) {
    event.preventDefault(); // Prevents default form submission behavior
    console.log(fname, lname, email, password);
    setFname(null);
    setLname(null);
    setEmail(null);
    setPassword(null);
    navigate("/login");
    }
      return (
    <div className="registerpage">
      <form action="/action_page.php" class="was-validated">
        <div class="mb-3 mt-3">
          <label for="First Name" class="form-label">
            First Name:
          </label>

          <input
            type="text"
            class="form-control"
            id="fname"
            placeholder=" First Name"
            name="fname"
            onChange={handleFirstNameChange}
            required
          />
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <div class="mb-3 mt-3">
          <label for="Second Name" class="form-label">
            Second Name:
          </label>

          <input
            type="text"
            class="form-control"
            id="lname"
            placeholder=" Second Name"
            name="lname"
            onChange={handleSecondNameChange}
            required
          />
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <div class="mb-3 mt-3">
          <label for="email" class="form-label">
            Email:
          </label>

          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            onChange={handleEmailChange}
            required
          />
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label">
            Password:
          </label>

          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter password"
            name="password"
            onChange={handlePasswordChange}
            required
          />
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <button type="submit" class="btn btn-primary" onClick={click}>
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
