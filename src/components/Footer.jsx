import React from "react";

export default function Footer() {
  let year = new Date();

  return (
    <div className="footer">
      <p>Copyright {year.getFullYear()}</p>
    </div>
  );
}
