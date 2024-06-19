import "./modal.css";

const Modal = ({ children, buttonText, isOpen, setIsOpen }) => {
  return (
    <div className="modal">
      <button onClick={() => setIsOpen(!isOpen)}>{buttonText}</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button onClick={() => setIsOpen(!isOpen)} className="btn-close">
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
