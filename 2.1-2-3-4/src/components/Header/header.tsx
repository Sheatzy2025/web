import React from "react";
import "./Header.css";

interface HeaderProps {
  children: React.ReactNode;
  img: string;
  alt: string;
}

const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <img className="header-logo" src={props.img} alt={props.alt} />
      <div className="header-content">{props.children}</div>
    </header>
  );
};

export default Header;
