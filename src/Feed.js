import React, { useState } from 'react';
import './Feed.css';
import Post from './Post.js';

function Feed() {
  const [post, setPost] = useState({ id: 0, title: "", time: "", img: "", likeCount: 0 });
  const [postList, setPostList] = useState([]);
  const [id, setId] = useState(0);

  function getTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const data = now.getDate();
    return `${year}년${month}월${data}일`
  }

  function getLike(id) {
    const posts = [...postList];
    const targetPost = posts.find(post => post.id === id);
    targetPost.likeCount = targetPost.likeCount + 1;
    setPostList(posts);
  }

  function uploadImg(e) {
    const objectURL = URL.createObjectURL(e.target.files[0]);
    const uploadPost = post;
    uploadPost.img = objectURL;
    setPost(uploadPost);
  }

  function addPosts() {
    setId(id + 1)
    setPostList([post, ...postList]);
    setPost({ id: 0, title: "", time: "", img: "", likeCount: 0 });
  }

  function inputInfo(e) {
    const uploadPost = post;
    uploadPost.id =  id;
    uploadPost.title = e.target.value;
    uploadPost.time = getTime();
    setPost(uploadPost); 
  }

  return (
    <div className="App">
      <div className="Navbar">
        <h2>Blog</h2>
      </div>
      <div>
        <input onChange={(e) => inputInfo(e)} className="Input" placeholder="제목을 입력해주세요." />
        <input type="file" onChange={(e)=>{uploadImg(e)}} />
        <button onClick={() => addPosts()} className="Btn" >저장</button>
      </div>
      {

        postList.map((post) => {
          return (
            <Post post={post} getLike={getLike} />
          )
        })
      }

    </div>
  );
}


export default Feed;
