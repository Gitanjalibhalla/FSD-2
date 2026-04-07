import { useContext } from "react";
import { FavContext } from "../context/FavContext";

function FavoriteList() {

  const { favorites } = useContext(FavContext);

  return (
    <div>
      <h2>Favorite Items</h2>

      {favorites.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
}

export default FavoriteList;