import React from 'react';
import './styles.css';

const Modal = ({ show, onClose, project }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
