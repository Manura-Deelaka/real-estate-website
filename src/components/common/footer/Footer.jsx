import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="centeredContainer">
            <div className="send">
              <div className="text">
                <p>Promise. No Spam.</p>
                <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>
                  Want to expand property portfolio ?
                </h1>
              </div>
              <div class="container">
                <div class="inline-form">
                  <div class="inline-form__control">
                    <input type="text" placeholder="Your email" />
                    <button class="button">Sign up</button>
                  </div>
                </div>
              </div>
              <p>We'll help you grow your career and reach new heights.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box logo-box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="" />
            </div>
          </div>

          {footer.map((val) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      <div className="legal" style={{ display: "flex", flexDirection: "row" }}>
        <h6>© 2021 RentUP. Designd By GorkCoder.</h6>
        <div class="social-icons">
          <a href="#" class="facebook-icon">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="instagram-icon">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer
