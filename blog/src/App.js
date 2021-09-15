/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let post = '셔지니와 쳐로리';
  let [글제목, 글제목변경] = useState(['운동화 추천', '셔츠 추천', '모자 추천']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목넘버, 누른제목넘버변경] = useState(0);
  const 제목바꾸기 = () => {
    let newArray = [...글제목];
    newArray[0] = '구두 추천';
    글제목변경(newArray);
  }

  const 반복된UI = () => {
    let array = [];
    for (let i = 0; i < 3; i++) {
      array.push(<div>안녕</div>);
    }

    return array;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: 'pink' }}>안오늘의 개발 Blog</div>
      </div>
      <div className="list">
        <h3> {글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍🏻</span> {따봉} </h3>
        <button onClick={제목바꾸기}>글제목변경</button>
        <p>9월 12일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[1]} </h3>
        <p>9월 12일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[2]} </h3>
        <p>9월 12일 발행</p>
        <hr />
      </div>

      <button onClick={() => { modal변경(!modal) }}>모달창 열고 닫는 버튼</button>

      {
        modal === true
          ? <Modal 글제목={글제목} 누른제목넘버={누른제목넘버} />
          : null
      }

      {반복된UI()}
      {
        글제목.map((el, i) => {
          return (
            <div className="list">
              <h3 onClick={() => { 누른제목넘버변경(i) }}> {el} </h3>
              <p>9월 12일 발행</p>
              <hr />
            </div>
          )
        })
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목넘버]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
