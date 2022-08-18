import React, { useEffect, useState } from "react";
import "./RightSide.css";
import Product from "./Product";
import { Link } from "react-router-dom";
import Form from "../../Form";
import BasicExample from "../../card";
// import { Card } from "@mui/material";
// import RatingForm from "../../RatingForm";

function RightSidePanel(props) {
  const [listOfProduct, setListOfProducts] = useState([]);

  useEffect(() => {
    //api call
    const myRequest = new Request(
      "https://lprpiuy5i4.execute-api.ap-south-1.amazonaws.com/default/comments",
      {
        method: "POST",
        body: JSON.stringify({
          queryType: "getAllValue",
        }),
      }
    );
    fetch(myRequest)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response[0].averageRating);
        setListOfProducts(response);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
    /*******/
  }, []);

  return (
    // <div className="container">
    <div className="RightSide__main">
      {/* <div><Form /></div> */}
      {listOfProduct.map((item) => (
        <Link className="link" to={`/order/` + item.parentId}>
          {/* <Product definition={item} /> */}
          <BasicExample definition={item} />
        </Link>
      ))}
    </div>
    // {/* // </div> */}
  );
}

export default RightSidePanel;
