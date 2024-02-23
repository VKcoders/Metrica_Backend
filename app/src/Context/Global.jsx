import { useState, useEffect } from "react";
import { Global as Context } from ".";

function GlobalState({children}) {
  const [token, setToken] = useState(null);
  const [worker, setWorker] = useState('');
  const [currentSearch, setCurrentSearch] = useState([]);

  const obj = {
    token, setToken,
    worker, setWorker,
    currentSearch, setCurrentSearch
  };

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default GlobalState;