import React from "react";
import Provider from "./Context/Global"
import Routes from "./Routes"

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;