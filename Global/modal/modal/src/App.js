import React, { useState } from 'react';
import Modal from './Modal';
import './reset.css'
import './modal.css'
import cookieImg from './cookie.png';


const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <button className="open-btn" onClick={handleOpenModal}>COOKIE </button>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <img className="cookie-img" src={cookieImg} />
        <h1 className="text-h1"> COOKIE !</h1>
        <p className="text-p"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
      </Modal>
    </div>
  );
};

export default App;
