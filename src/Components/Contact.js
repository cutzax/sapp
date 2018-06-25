import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div>
      <h1>Contact Us</h1>
      <p>Questions, Comments Concerns? Enter information below and we'll get back to you ASAP.</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br/>
        <label>
          E-mail:
          <input type="text" name="email" />
        </label>
        <br/>
        <label>
          Subject:
          <input type="text" name="subject"/>
        </label>
        <br/>
        <label>
          Your Message:
          <br/>
          <textarea placeholder="Talk to Us"/>
        </label>
          <br/>
      <input type="submit" value="Submit"/>
      </form>
      </div>
    );
  }
}

export default Contact;
