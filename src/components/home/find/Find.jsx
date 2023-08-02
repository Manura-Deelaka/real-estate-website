import React from "react";
import Heading from "../../common/Heading";
import "./find.css";

const FindHome = () => {
  return (
    <>
      <section className="location padding">
        <div
          className="container"
          style={{ background: "#d3f2db", padding: 60, borderRadius: 8 }}
        >
          <Heading
            title="Try new way to find your new home"
            subtitle="Find your dream house sample text"
          />

          <div class="form-comp">
            <div class="inline-form">
              <div class="inline-form__control">
                <input type="text" placeholder="Your email" />
                <button class="button">Sign up</button>
              </div>
            </div>
            <p>We'll help you grow your career and reach new heights.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindHome;
