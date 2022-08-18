import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductsDetails.css";
// import Rating from "@material-ui/lab/Rating";
import { Rating } from "@mui/material";
import Comments from "../Comments";
import RatingForm from "../RatingForm";
import ModalRating from "../ModalRating";

function ProductDetails(props) {
  const [productDetails, setProductDetails] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    //api call
    const myRequest = new Request(
      "https://lprpiuy5i4.execute-api.ap-south-1.amazonaws.com/default/comments",
      {
        method: "POST",
        body: JSON.stringify({
          parentId: id,
          queryType: "getValueOfOneType",
        }),
      }
    );
    fetch(myRequest)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setProductDetails(response);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
    /*********/
  }, []);

  return (
    <div className="container">
      <div className="left-container">
        <div>
          <img className="placeorder__image" src={productDetails.image} />
        </div>
        <div className="placeholder__description">
          <div
            style={{ fontSize: "24px", lineHeight: "32px", fontWeight: 500 }}
          >
            {" "}
            {productDetails.name}{" "}
          </div>
          <div>
            {/* <input type="range" name="rate" min="1" max="10" /> */}

            <Rating
              name="read-only"
              value="4"
              readOnly
              style={{ fontSize: "20px" }}
            />
            {productDetails.averageRating}
            <ModalRating
              parentID={productDetails.parentId}
              currentUserId="akash"
            />
          </div>
          <hr></hr>
          <div>
            <div className="textgap">
              Total Ratings: {productDetails.noOfRatings}
            </div>
          </div>
          <div>
            <br></br>
            <div style={{ fontSize: "24px" }} className="textgap">
              About
            </div>
            <div>{productDetails.about}</div>
          </div>
        </div>
      </div>
      <div className="right-container">
        <Comments details={id} currentUserId="akash" />
      </div>
    </div>
  );
}

export default ProductDetails;

// <Grid container>
//         <Grid item xs={5}>
//           <img className="placeorder__image" src={productDetails.image} />
//         </Grid>
//         <Grid item xs={4}>
//           <div className="placeholder__description">
//             <div
//               style={{ fontSize: "24px", lineHeight: "32px", fontWeight: 500 }}
//             >
//               {" "}
//               {productDetails.name}{" "}
//             </div>
//             <div>
//               <Rating
//                 name="read-only"
//                 value="3"
//                 readOnly
//                 style={{ fontSize: "20px" }}
//               />
//               {productDetails.averageRating}
//             </div>
//             <hr></hr>
//             <div>
//               <div className="textgap">
//                 Total Ratings:{" "}
//                 {/* <span className="pricetag">₹ {productDetails.noOfRatings}</span> */}
//                 {productDetails.noOfRatings}
//               </div>
//               {/* <div className="textgap">
//               </div> */}
//             </div>
//             <div>
//               <br></br>
//               <div style={{ fontSize: "24px" }} className="textgap">
//                 About
//               </div>
//               <div>{productDetails.about}</div>
//             </div>
//           </div>
//         </Grid>
//         {/* <Grid item xs={3}>
//                     <Paper variant="outlined" className="placeorder__order">
//                         <div>
//                             <div><strong>Without Exchange</strong></div>
//                             <div>50,999</div>
//                             <div style={{ marginTop: "10px"}}><strong>Add an Accessory</strong></div>
//                             <div>
//                                 <label><input type="checkbox" ></input>Apple Airpods</label><br></br>
//                                 <label><input type="checkbox" ></input>Apple 20W USB Power Adapter</label>
//                             </div>
//                             <div >

//                                 <button className="placeorder__button addtocart" onClick={addTOCart}>Add to Cart</button>

//                                 <Link to="/checkout">
//                                     <button className="placeorder__button buynow">Buy Now</button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </Paper>
//                 </Grid> */}
//       </Grid>
