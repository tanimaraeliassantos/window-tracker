import React, { useEffect, useState } from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      console.log("Setting up");
      setWindowWidth(windowWidth);
    }
    window.addEventListener("resize", watchWidth);

    return function () {
      console.log("Cleaning up");
      window.removeEventListener("resize, watchWidth");
    };
  }, []);
  return <h1>Window width: {windowWidth}</h1>;
}
