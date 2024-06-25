import React from 'react';
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

const ModalForm = ({ children, buttonText, isOpen, setIsOpen, onCloseModal, formType = 'create' }) => {


  const formType = {
    create: 
  }



  return (
    <>
      <button onClick={setIsOpen}>{buttonText}</button>
      <Modal open={isOpen} onClose={onCloseModal} center>
        {children}
      </Modal>
    </>
  );
};

export default ModalForm;
