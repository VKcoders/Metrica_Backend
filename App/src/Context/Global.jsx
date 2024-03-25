import { useState } from "react";
// import { useState, useEffect } from "react";
import { Global as Context } from ".";
// import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';

// import { generateToken } from "../Service/Token";

// const MMKV = new MMKVLoader().initialize();

function GlobalState({children}) {
  // const [cachedUser, setCachedUser] = useMMKVStorage("username", MMKV, null);
  // const [cachedPassword, setCachedPassword] = useMMKVStorage("password", MMKV, null);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({id: '', name: ''});
  const [currentSearch, setCurrentSearch] = useState([]);
  const [history, setHistory] = useState([]);

  // useEffect(() => {
  //   async function Jobs() {
  //     const getTokenFromCache = await generateToken({
  //       username: cachedUser,
  //       password: cachedPassword
  //     });

  //     if (!getTokenFromCache.status) return '';

  //     setToken(getTokenFromCache.token);
  //     setUser({
  //       id: getTokenFromCache.id,
  //       name: getTokenFromCache.name
  //     })
  //   }
  //   if (cachedUser !== null || cachedPassword !== null) {
  //     Jobs();
  //     return;
  //   }

  //   setToken("");
  // }, [])

  const obj = {
    // cachedUser, setCachedUser,
    // cachedPassword, setCachedPassword,
    token, setToken,
    user, setUser,
    currentSearch, setCurrentSearch,
    history, setHistory
  };

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default GlobalState;