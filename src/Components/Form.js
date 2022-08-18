/****Whole body has been used in modal instead of importing in display content*****/

import React from "react";
import { useState } from "react";

function Form() {
  const [inputs, setInputs] = useState({
    name: "",
    about: "",
    image: "",
  });
  const imageName = Date.now().toString();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(inputs.about);

    const myRequest = new Request(
      "https://lprpiuy5i4.execute-api.ap-south-1.amazonaws.com/default/comments",
      {
        method: "POST",
        body: JSON.stringify({
          name: inputs.name,
          about: inputs.about,
          image: `https://reviewapp-images.s3.ap-south-1.amazonaws.com/Movies/${imageName}`,
          queryType: "addMovie",
        }),
      }
    );
    fetch(myRequest)
      .then((response) => response.json())
      .then((response) => {
        console.log("movies are: ", response);
        // setBackendComments([response, ...backendComments]);
        // setInputs(response);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  function upload(e) {
    console.log(e);
    const url =
      "https://uibj11yzx1.execute-api.ap-south-1.amazonaws.com/default/getS3Url";
    fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        postID: imageName,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetch(res.uploadURL, {
          method: "PUT",
          mode: "cors",
          body: e.target.files[0],
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Movie name
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        About
        <input
          type="text"
          name="about"
          value={inputs.about || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Image
        <input type="file" onChange={upload} />
      </label>
      <input type="submit" />
    </form>
  );
}

export default Form;
