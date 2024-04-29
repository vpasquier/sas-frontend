import React from 'react';
import { Modal, TextField, Button } from '@material-ui/core';

const CartModal = ({ open, onClose, cart, formData, onChange, onSave, isNew }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ backgroundColor: 'white', padding: 20 }}>
        <h2>{isNew ? 'Add New Cart' : 'Edit Cart'}</h2>
        {/* Add fields for Cart */}
        <Button variant="contained" color="primary" onClick={onSave}>{isNew ? 'Save' : 'Update'}</Button>
        <Button variant="contained" onClick={onClose}>Cancel</Button>
      </div>
    </Modal>
  );
};

export default CartModal;
