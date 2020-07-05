import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>
          Catc
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">the</span>
          </span>
          Day
        </h1>
        <h3 className="tagline">
          <span>Fresh Daily</span>
        </h3>
      </header>
    );
  }
}

export default Header;