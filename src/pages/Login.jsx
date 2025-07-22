import React from 'react';
import './Login.css'; // Make sure this CSS file is in the same folder

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <p>
          Don&apos;t have an account? <a href="/register">Sign up</a>
        </p>
       <form>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            required
          />
        </div>

        <a href="/forgot-password" className="text-end">Forgot password?</a>

        <button type="submit" className="btn btn-login">Login</button>
      </form>

      </div>
    </div>
  );
};

export default Login;
