import React from 'react';
import { Modal, TextField, Button } from "@mui/material";

const OfferModal = ({ open, onClose, offer, formData, onChange, onSave, isNew }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ backgroundColor: 'white', padding: 20 }}>
        <h2>{isNew ? 'Add New Offer' : 'Edit Offer'}</h2>
        {/* Add fields for Offer */}
        <Button variant="contained" color="primary" onClick={onSave}>{isNew ? 'Save' : 'Update'}</Button>
        <Button variant="contained" onClick={onClose}>Cancel</Button>
      </div>
    </Modal>
  );
};

export default OfferModal;
