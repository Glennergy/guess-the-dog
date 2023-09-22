import life from "../../assets/images/likes.svg";
import { useState } from "react";
import "./Header.scss";

const Header = ({ score }) => {
  return (
    <>
      <div className="header">
        <div>
          <img src={life} alt="heart icon" />
          <img src={life} alt="heart icon" />
          <img src={life} alt="heart icon" />
        </div>
        <div>score: {score}</div>
      </div>
    </>
  );
};
export default Header;
