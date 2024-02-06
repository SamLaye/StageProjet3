import React from "react";

function Footer() {
  return (
    <footer className="row justify-content-between mt-5 px-4">
      <div className="col-12 col-md-6">
        <a
          href="#"
          className="text-uppercase text-white mx-2"
          style={{ fontSize: "12px" }}
        >
          CREATIVE TIM
        </a>
        <a
          href="#"
          className="text-uppercase text-white mx-2"
          style={{ fontSize: "12px" }}
        >
          ABOUT US
        </a>
        <a
          href="#"
          className="text-uppercase text-white mx-2"
          style={{ fontSize: "12px" }}
        >
          BLOG
        </a>
      </div>
      <p className="col-12 col-md-6" style={{ fontSize: "12px" }}>
        © 2024 made with by <a href="#">Creative Tim</a> for a better web.
      </p>
    </footer>
  );
}

export default Footer;
