function Comment(props) {
  return (
    <div key={props.comment.userId} className="comment">
      {/* <div className="comment-image-container">
        <img src="/user-icon.png" />
      </div> */}
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{props.comment.userId}</div>
          <div>{props.comment.createdAt}</div>
        </div>
        <div className="comment-text">{props.comment.comment}</div>
      </div>
    </div>
  );
}

export default Comment;
