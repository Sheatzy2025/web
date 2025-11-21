import React from "react";
import "./Footer.css"; 

interface FooterProps {
  children: React.ReactNode;
  img: string;
  alt: string;
}

const Footer = (props: FooterProps) => {
  return (
    <footer className="footer">
      <img className="footer-logo" src={props.img} alt={props.alt} />
      <div className="footer-content">{props.children}</div>
    </footer>
  );
};

export default Footer;
