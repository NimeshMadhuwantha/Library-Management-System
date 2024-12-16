import React from 'react'
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
    <div className="login-form">
      <h2>Login to BookIT</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="signup-link">Don't have an account? <a href="/signup">Sign up here</a></p>
    </div>
  </div>
  )
}

export default LoginPage