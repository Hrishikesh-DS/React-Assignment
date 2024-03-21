import React, { ReactNode } from 'react';
import Modal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: ReactNode; // Specify ReactNode type explicitly
}

const CustomModal = ({ isOpen, onClose, onConfirm, children }: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '5px'
        }
      }}>
      {children}
      <div className='row'>
        <div className='col-3'>
          <button className='btn btn-danger' onClick={onClose}>Cancel</button>
        </div>
        <div className='col-3'>
          <button className='btn btn-success' onClick={onConfirm}>Yes</button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
