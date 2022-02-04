import React from "react";
import "./About.css";
import { Provider, LikeButton } from "@lyket/react";
import avatar from "./../../images/avatar.jpg";
import Navbar from "./../Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Güven Cakmak</span>
            </p>
            <h2 className="about__heading">A Front-end student in KYH</h2>
            <div className="about__info">
              I am from Sweden, Stockholm. A place of nature and rich history.
              Since my childhood, i love playing computer games and design. I
              always had the thought when i was younger to design stuff with my
              unique point of view. I also love to create things that can be
              usefull to others.
              <br /> <br />
              I started coding since my friend recommended me to be a frontend
              developer where i could use my interest in design to code. Coding
              is also an art for me. I love it and now I have the opportunity to
              design along with the coding. I find it really interesting and I
              enjoy the process a lot.
              <br />
              <br />
              My vision is to make the world a better place. Now almost
              everything is becoming better than ever. It is time for us to
              create more good stuff that helps the world to become a better
              place.
            </div>
          </div>
          <div className="right">
            <img src={avatar} alt="Avatar" className="avatar"></img>
            <h2>Sounds Intresting?</h2>
            <Provider
              apiKey="acc0dbccce8e557db5ebbe6d605aaa"
              theme={{
                colors: {
                  background: "#b8fff3",
                  text: "violet",
                  primary: "rgba(255, 224, 138, 0.4)",
                },
              }}
            >
              <LikeButton
                namespace="my-blog-post"
                id="how-to-beat-me-at-chess"
              />
            </Provider>
          </div>
        </div>
      </div>
    </>
  );
}
