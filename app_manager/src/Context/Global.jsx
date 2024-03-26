import { useState } from "react";
import { Global as Context } from ".";

function GlobalState({children}) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({id: '', name: ''});
  const [currentSearch, setCurrentSearch] = useState([]);
  const [history, setHistory] = useState([]);

  const obj = {
    token, setToken,
    user, setUser,
    currentSearch, setCurrentSearch,
    history, setHistory
  };

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default GlobalState;