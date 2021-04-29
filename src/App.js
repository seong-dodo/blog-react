import React, { useState } from 'react';
import './App.css';
import Post from './Post.js';

function App() {
  const [post, setPost] = useState({ title: "", time: "" });
  const [postList, setPostList] = useState([]);
  const [likeCount, setLikeCount] = useState(0);

  function getTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const data = now.getDate();
    return `${year}년${month}월${data}일`
  }

  function addPosts() {
    setPostList([post, ...postList]);
  }

  function inputInfo(e) {
    setPost(
      {
        title: e.target.value,
        time: getTime()
      }
    )
  }


  return (
    <div className="App">
      <div className="Navbar">
        <h2>Blog</h2>
      </div>
      <div>
        <input onChange={(e)=>inputInfo(e)} className="Input" placeholder="제목을 입력해주세요." />
        <button onClick={()=>addPosts()} className="Btn" >저장</button>
      </div>
      {

        postList.map((post) => {
          return (
            <Post post={post} />
          )
        })
      }

    </div>
  );
}


export default App;
