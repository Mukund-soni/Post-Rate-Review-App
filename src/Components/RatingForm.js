import React from "react";
import { useState } from "react";

function RatingForm(props) {
  const [input, setInput] = useState(10);

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(event);
    console.log(input);
    const myRequest = new Request(
      "https://lprpiuy5i4.execute-api.ap-south-1.amazonaws.com/default/comments",
      {
        method: "POST",
        body: JSON.stringify({
          parentId: props.parentID,
          userId: props.currentUserId,
          userRating: input,
          queryType: "addRating",
        }),
      }
    );
    fetch(myRequest)
      .then((response) => response.json())
      //   .then((response) => {
      //     console.log("movies are: ", response);
      //     // setBackendComments([response, ...backendComments]);
      //     // setInputs(response);
      //   })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Rating
        <p>{input}</p>
        <input
          type="range"
          //   name="rating"
          value={input}
          min="1"
          max="10"
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default RatingForm;
