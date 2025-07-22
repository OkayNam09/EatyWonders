import React from 'react';
import './Login.css'; // reuse same styling as Login

const Register = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Register</h2>
        <p className="text-muted text-center mb-4">
          Already have an account? <a href="/login">Login</a>
        </p>
        <form>
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fullname" placeholder="Your full name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Create password" required />
          </div>
          <button type="submit" className="btn btn-login">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
