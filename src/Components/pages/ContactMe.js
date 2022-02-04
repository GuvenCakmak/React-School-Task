import React, { useState, useRef } from "react";
import "./Contact.css";
import shakehand from "./../../images/shakehand.jpg";
import emailjs from "@emailjs/browser";
import Navbar from "./../Navbar";

export default function ContactMe() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cwng06m",
        "template_slus5op",
        form.current,
        "user_GnJOJL2G7lCDQnETbyDjd"
      )
      .then(
        (result) => {
          alert((result.message = "Message sent Succsessfully"));
        },
        (error) => {
          alert((error.message = "Message Failed"));
        }
      );
    form.current.reset();
  }

  return (
    <>
      <Navbar />
      <div>
        <div className="left">
          <img src={shakehand} className="img"></img>
        </div>
        <div className="right">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" placeholder="Enter Name" name="user_name" />

            <label>Email</label>
            <input type="email" placeholder="Enter Email" name="user_email" />

            <label>Message</label>
            <textarea name="message" placeholder="Enter message here..." />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </>
  );
}
