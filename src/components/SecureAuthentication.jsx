import React, { useState } from 'react';

function SecureAuthentication() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');  // State for email input

  const handleLogin = () => {
    if (email) {
      setIsLoggedIn(true);
      // Implement actual authentication logic here using the email
      alert(`Logged in as ${email}`);
    } else {
      alert('Please enter an email address.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');  // Clear email field on logout
  };

  return (
    <div className="component-container">
      <h2>Secure Authentication</h2>
      {isLoggedIn ? (
        <>
          <p>Logged in as: {email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default SecureAuthentication;
