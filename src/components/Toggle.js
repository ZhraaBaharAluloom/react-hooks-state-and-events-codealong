import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      style={{ background: isOn ? "white" : "red" }}
      onClick={handleClick}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
