import React, { useState } from 'react';
import './reset.css'
import './modal.css'
import cookieImg from './cookie.png';
import closeImg from './x.png';

function App() {

  const [isOpen, setOpen] = useState(false);
  // 상태가 true 됐을때 열리도록
  const handleClick = () => {
    // 여기서 열어준다
    setOpen(true);
  }
  return (
    <>
      <h1 className="a11y-hidden"> modal </h1>
      <button className="open-btn" type="button" onClick={handleClick}> COOKIE </button>
      <Modal isOpen={isOpen}/>
    </>
  );
}

function Modal(){
  return(
    <>
      <article className="modal-wrap">
        <span className="close-btn"> <img src={closeImg} /> </span>
        <img className="cookie-img" src={cookieImg} />
        <h2> COOKIE !</h2>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
        <button className="like-cookie" type="button"> I LIKE COOKIES </button>
      </article>
    </>
  )
}
export default App;

// modal창 기능
// 1. 버튼을 누르면 새로운 브라우저가 열리는 것이 아닌, 레이어 위에 겹쳐져서 창이 띄워지기
// 2. X버튼을 누르면 다시 hidden 되기
// 3. 흠냐링 끈끝?
