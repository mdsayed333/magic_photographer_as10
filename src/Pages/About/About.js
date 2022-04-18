import React from "react";
import Footer from "../Shared/Footer/Footer";
import "./About.css";
import sayed from "../../img/sayed.png";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="about rounded p-4">
        <h2 className="mb-0 title ">My Goal</h2>
        <img className="profile-img m-0 p-0" src={sayed} alt="" />

        <div className="text-start">
          <p>
            আমার একমাত্র লক্ষই হলো একজন ভালো মানের Web Developer হিসেবে নিজেকে
            গড়ে তোলা। আমি ২০২২ সালের মধ্যেই নিজেকে একজন Full Stack Web Developer
            হিসেবে তৈরি করতে চাই।
          </p>
          <p>
            এই লক্ষে পৌঁছানোর জন্য আমাকে দৈনিক ১৮ ঘন্টা কাজ করা লাগলেও অমি তা
            করতে রাজি । আমি জানি আমি আমার লক্ষে পৌঁছানোর জন্য এতটুকু Effort করার
            সক্ষমতা রাখি।
          </p>
          <p>
            আমি বিশ্বাস করি লেগে থাকলে এবং কাজের প্রতি আন্তরিক থাকলে কোনো কাজই
            অসম্ভব নয়।
          </p>
          <p>আমি পারব….</p>
          <p>
            আমি পারবই একদিন নিজেকে Best Web Developer এর তালিকায় নিয়ে আসতে ।
          </p>
          <p>ইনশাআল্লাহ…….</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
