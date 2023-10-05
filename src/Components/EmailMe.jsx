import React, { Component } from 'react';

class EmailMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to send the email using an email service.
    // For simplicity, we'll just log the values for now.
    console.log('Email:', this.state.email);
    console.log('Message:', this.state.message);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Email</button>
      </form>
    );
  }
}

export default EmailMe;
