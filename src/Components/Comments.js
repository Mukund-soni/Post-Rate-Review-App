import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

function Comments(props) {
  console.log("check", props);
  const [backendComments, setBackendComments] = useState([]);

  const addComment = (text, parentId) => {
    // console.log("add comment: ", text, parentId);
    const myRequest = new Request(
      "https://lprpiuy5i4.execute-api.ap-south-1.amazonaws.com/default/comments",
      {
        method: "POST",
        body: JSON.stringify({
          parentId: props.details,
          userId: props.currentUserId,
          userComment: text,
          queryType: "addComment",
        }),
      }
    );
    fetch(myRequest)
      .then((response) => response.json())
      .then((response) => {
        // console.log("comments are: ", response);
        // setBackendComments([response, ...backendComments]);
        setBackendComments(response);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  useEffect(() => {
    // console.log("second check", props);
    const myRequest = new Request(
      "https://lprpiuy5i4.execute-api.ap-south-1.amazonaws.com/default/comments",
      {
        method: "POST",
        body: JSON.stringify({
          parentId: props.details,
          queryType: "getValueOfOneType",
        }),
      }
    );
    fetch(myRequest)
      .then((response) => response.json())
      .then((response) => {
        // console.log("comments are: ", response);
        setBackendComments(response.userComment);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      {/* <div className="comment-form-title">Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} /> */}
      <div className="comments-container">
        {backendComments.map((backendComment) => (
          <Comment comment={backendComment} />
        ))}
      </div>
      <div className="comment-form-title">Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
    </div>
  );
}

export default Comments;
