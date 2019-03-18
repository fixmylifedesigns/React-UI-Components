import React from "react";
import "./Header.css";
import logo from './lambda-logo.png'; 

const ImageThumbnail = () => {
  return (
    <div className="thumbnail">
      <img src={logo} />
    </div>
  );
};

export default ImageThumbnail;
