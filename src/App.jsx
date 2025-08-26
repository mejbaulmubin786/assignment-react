import React, { useState } from "react";
import Login from "./Layout/Login";
import Signup from "./Layout/Signup";

const App = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>
      {showSignup ? (
        <Signup onSwitch={() => setShowSignup(false)} />
      ) : (
        <Login onSwitch={() => setShowSignup(true)} />
      )}
    </div>
  );
};

export default App;
