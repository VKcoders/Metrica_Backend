import { useState } from "react";
import { Search as Context } from ".";

function SearchState({children}) {
  const [marker, setMarker] = useState(0);
  const [newSearch, setNewSearch] = useState({
    Cliente: {
      status: false,
      value: {
        clientId: null,
        qtdUsers: 0,
        meta: 0,
        total: 0
      }
    },
    Introdução: {
      status: false,
      value: [],
    },
    Perguntas: {
      status: false,
      value: [],
    }
  });

  const obj = { marker, setMarker, newSearch, setNewSearch };

  return <Context.Provider value={obj}>{children}</Context.Provider>;
}

export default SearchState;