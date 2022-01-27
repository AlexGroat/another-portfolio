import React from "react";
import "./intro.css";
import CodePic from '../../img/coding.jpg'

const intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">Alex Groat</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item"> Full Stack Developer</div>
              <div className="i-title-item"> MERN Developer</div>
              <div className="i-title-item"> Passion For Innovation</div>
              <div className="i-title-item"> Mobile First Design</div>
            </div>
          </div>
          <div className="i-desc">
            Full Stack Developer currently undertaking the University
            of Adelaide's Coding Bootcamp. Also participating in multiple
            Udemy courses to broaden my development knowledge. Strong passion 
            for building front and back end applications.
          </div>
        </div>
      </div>
      <div className="i-right">
          <div className="i-bg"></div>
          <img src={CodePic} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default intro;
