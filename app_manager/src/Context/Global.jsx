import { useState } from "react";
import { Global as Context } from ".";

function GlobalState({children}) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({id: '', name: ''});
  const [currentSearch, setCurrentSearch] = useState([]);
  const [searchs, setSearchs] = useState([]);

  const obj = {
    token, setToken,
    user, setUser,
    currentSearch, setCurrentSearch,
    searchs, setSearchs
  };

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default GlobalState;