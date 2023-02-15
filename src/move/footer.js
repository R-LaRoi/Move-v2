import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <span style={{ fontSize: "12px", color: "#E825D5" }}>
          ACE Certified Personal Trainer{" "}
        </span>
        <div>
          <i class="fa-brands fa-spotify">
            <a href="https://open.spotify.com/playlist/02LtXdK3vRDKtKSiQxuTIq?si=54e1146069ed4808"></a>
          </i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-regular fa-at"></i>
        </div>
      </footer>
    </div>
  );
}
