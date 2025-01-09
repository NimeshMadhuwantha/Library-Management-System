import React from 'react'
import './SignUpPage.css';

const SignupPage = () => {
  return (
    <div className="signup-container">
    <div className="signup-form">
      <h2>Sign Up for BookIT</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" required />
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password" required />
        </div>

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p className="login-link">Already have an account? <a href="/LoginPage">Login here</a></p>
    </div>
  </div>
);

}

export default SignupPage