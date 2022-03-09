import React, { useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <button>Toggle WindowTracker</button>
      <WindowTracker />
    </div>
  );
}
