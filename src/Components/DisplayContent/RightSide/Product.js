import React from "react";
import "./RightSide.css";
// import Rating from "@material-ui/lab/Rating";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import BasicExample from "../../card";

function Product(props) {
  return (
    // <BasicExample />
    <div className="product">
      <div className="product__image">
        <img src={props.definition.image} height="280px" />
      </div>

      <div className="product__rating">
        <Rating
          name="read-only"
          value="4"
          style={{ fontSize: "20px" }}
          readOnly
        />
        {props.definition.averageRating}
      </div>
      <div className="product__name">{props.definition.name}</div>
    </div>
  );
}

export default Product;
