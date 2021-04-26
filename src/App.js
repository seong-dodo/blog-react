import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card.js';

function App() {
  const [blogTitle, changeBlogTitle] = useState({ title: "", time: "" });
  const [cardList, addCardList] = useState([]);
  const [likeBtn, setLikeBtn] = useState(0);

  function getTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const data = now.getDate();

    return `${year}년${month}월${data}일`
  }

  function addContents() {
    addCardList([blogTitle, ...cardList]);
  }
  
  function addLike() {
    return setLikeBtn(likeBtn+1)
  }

  return (
    <div className="App">
      <div className="Navbar">
        <h2>Blog</h2>
      </div>
      <input onChange={(e) => changeBlogTitle({ title: e.target.value, time: getTime() })} className="Input" placeholder="제목을 입력해주세요." ></input><button onClick={(e) => addContents(e)} className="Btn" >저장</button>

      {
        
        cardList.map((title) => {
          return (
            <Card title={title} />
          )
        })
      }

    </div>
  );
}


export default App;
