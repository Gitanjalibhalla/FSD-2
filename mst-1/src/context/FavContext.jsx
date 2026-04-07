import { createContext, useState } from "react";

export const FavContext = createContext();

export const FavProvider = ({ children }) => {

  const [favorites, setFavorites] = useState([]);

  const addFavorite = (product) => {
    setFavorites([...favorites, product]);
  };

  return (
    <FavContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </FavContext.Provider>
  );
};