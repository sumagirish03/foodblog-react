import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div class="underline"></div>
      <div class="section-footer">
        <div class="footer-sm">
          <span class="sm-icon">
            <a href="#">
              <i class="fa fa-facebook"></i>
              <span>facebook</span>
            </a>
          </span>
          <span class="sm-icon">
            <a href="#">
              <i class="fa fa-twitter"></i>
              <span>Twitter</span>
            </a>
          </span>
          <span class="sm-icon">
            <a href="#">
              <i class="fa fa-google-plus"></i>
              <span>GOOGLE+</span>
            </a>
          </span>
          <span class="sm-icon">
            <a href="#">
              <i class="fa fa-linkedin-square"></i>
              <span>linkedin</span>
            </a>
          </span>
          <span class="sm-icon">
            <a href="#">
              <i class="fa fa-youtube-play"></i>
              <span>YOUTUBE</span>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
