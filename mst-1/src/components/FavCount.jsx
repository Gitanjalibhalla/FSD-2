import { useContext } from "react";
import { FavContext } from "../context/FavContext";

function FavCount() {

  const { favorites } = useContext(FavContext);

  return (
    <h3>Total Favorites: {favorites.length}</h3>
  );
}

export default FavCount;