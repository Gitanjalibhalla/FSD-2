src/components/ProductList.js
import { useContext } from "react";
import { FavContext } from "../context/FavContext";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Headphones" }
];

function ProductList() {

  const { addFavorite } = useContext(FavContext);

  return (
    <div>
      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id}>
          {p.name}
          <button onClick={() => addFavorite(p)}>
            Add to Favorite
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;