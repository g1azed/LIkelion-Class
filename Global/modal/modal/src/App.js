import React, { useState } from 'react';
import Modal from './Modal';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <h1>Modal Content</h1>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default App;
