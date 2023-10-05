import React, { useState } from 'react';

const EmailMe = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the email, for example, send it to a server or display it
    console.log('Email submitted:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Enter your email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="example@example.com"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmailMe;
