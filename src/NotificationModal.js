import React from 'react';
import { Modal, TextField, Button } from "@mui/material";

const NotificationModal = ({ open, onClose, notification, formData, onChange, onSave, isNew }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ backgroundColor: 'white', padding: 20 }}>
        <h2>{isNew ? 'Add New Notification' : 'Edit Notification'}</h2>
        {/* Add fields for Notification */}
        <Button variant="contained" color="primary" onClick={onSave}>{isNew ? 'Save' : 'Update'}</Button>
        <Button variant="contained" onClick={onClose}>Cancel</Button>
      </div>
    </Modal>
  );
};

export default NotificationModal;
