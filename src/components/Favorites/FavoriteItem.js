import React, { useContext } from "react";

import Card from "../UI/Card";
import "./FavoriteItem.css";
import { ProductsContext } from "../../context/productContext";

const FavoriteItem = (props) => {
  const removeFav = useContext(ProductsContext).removeFav;

  const removeFavHandler = () => {
    removeFav(props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="favorite-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className="delete-button" onClick={removeFavHandler}>
          X
        </div>
      </div>
    </Card>
  );
};

export default FavoriteItem;
