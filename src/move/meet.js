import React from "react";
import "./meet.css";

export default function Meet() {
  return (
    <section>
      <video autoPlay loop muted id="video">
        <source
          src="
https://user-images.githubusercontent.com/114012059/218713471-633594a8-adc7-4600-90c1-95f4a1347ff6.mp4"
          type="video/mp4"
        />
      </video>

      <a href id="about">
        <div className="col-2">
          <span className="header--vid">consistency is key.</span>
          <br />
          <br />
          <p className="vid--text">
            <b>meet rachel.</b> always on. high energy unmatched. here to
            motivate you through every minute of your fitness journey. Focusing
            on body weight movements to help you strengthen, condition and
            improve balance. Rachel is ready to partner with you and push beyond
            your expectations. wherever you are. whenever you're ready. let's
            move!{" "}
          </p>
        </div>
      </a>
    </section>
  );
}
