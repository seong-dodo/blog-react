import heeya from './heeya.JPG';
import PostComment from './PostComment.js';
import React, { useState } from 'react';
import './Feed.css';

function Post(props) {
  const [isDisplayComment, changeDisplayComment] = useState(false);

  return (
    <div className="Post">
      <div className="UserDate"><img src={heeya} width='15' height='15' />heeya</div>
      <h3> {props.post.title} </h3>
      <p> {props.post.time} </p>
      <img src={props.post.img} width='250' height='250' />
      <div className="Connection">
        <span 
        onClick={()=>{props.getLike(props.post.id)}}
        className="Like">🧡{props.post.likeCount}</span>
        <span 
        onClick={() => {changeDisplayComment(!isDisplayComment) }} 
        className="CommentBtn">🙋🏻‍♀️</span>
      </div>
      {
        isDisplayComment === true
          ? <PostComment />
          : null
      }

    </div>
  )
}


export default Post