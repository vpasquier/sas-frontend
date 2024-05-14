import React from "react";
import { Modal, TextField, Button } from "@mui/material";

const BookingModal = ({ open, onClose, booking, formData, onChange, onSave, isNew }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ backgroundColor: "white", padding: 20 }}>
        <h2>{isNew ? "Add New Booking" : "Edit Booking"}</h2>
        {/* Add fields for Booking */}
        <Button variant="contained" color="primary" onClick={onSave}>
          {isNew ? "Save" : "Update"}
        </Button>
        <Button variant="contained" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
