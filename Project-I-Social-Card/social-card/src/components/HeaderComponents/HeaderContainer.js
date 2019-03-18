import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent.js";
import HeaderTitle from "./HeaderTitle";
import ImageThumbnail from "./ImageThumbnail";

const HeaderContainer = () => {
  return (
    <div className="headerContainer">
      <div>
        <ImageThumbnail />
      </div>
      <div>
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderContainer;
