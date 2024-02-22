import { useState, useEffect } from "react";
import { Global as Context } from ".";

function GlobalState({children}) {
  const [token, setToken] = useState(null);

  const obj = {
    token, setToken
  };

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default GlobalState;