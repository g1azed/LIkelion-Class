import React from 'react';
import './modal.css'

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-wrap">
            <div className="modal-content">
                {children}  
                <button className="close" onClick={onClose}> I LIKE COOKIES </button>
            </div>
        </div>
    );
};

export default Modal;
