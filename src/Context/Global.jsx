import { useState, useEffect } from "react";
import { Global as Context } from ".";

function GlobalState({children}) {

  const obj = {};

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default GlobalState;