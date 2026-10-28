import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    // Логика отправки запроса на бэкенд (/djangoapp/register)
  };

  return (
    <div className="register_container">
      <h2>SignUp</h2>
      <form onSubmit={register}>
        <div>
          <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required />
        </div>
        <div>
          <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
