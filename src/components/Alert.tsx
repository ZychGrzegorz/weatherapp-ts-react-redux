import React from "react";
type AlertProps = {
  message: string;
  onClose: () => void;
};
const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div className="modal">
      <div className="modalBackground" onClick={onClose}></div>
      <div className="modalCard">
        <header className="modalCardHeader">
          <p className="modalCardTitle">{message}</p>
        </header>
        <footer className="modalCardFooter"></footer>
        <button className="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Alert;
