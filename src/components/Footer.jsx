import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="left-section">
          <h3 className="title">About Us</h3>
          <p className="text">
            We are committed to delivering the best experience. Contact us for more information.
          </p>
        </div>
        <div className="right-section">
          <h3 className="title">Follow Us</h3>
          <div className="icons">
            <InstagramIcon fontWeight="small" />
            <XIcon fontWeight="small" />
            <FacebookIcon fontWeight="small" />
            <WhatsAppIcon fontWeight="small" />
          </div>
        </div>
        <div className="bottom">
          <p className="copyright">© 2025 Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}