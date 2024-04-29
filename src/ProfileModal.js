import React from 'react';
import { Modal, TextField, Button } from '@material-ui/core';

const ProfileModal = ({ open, onClose, profile, formData, onChange, onSave, isNew }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ backgroundColor: 'white', padding: 20 }}>
        <h2>{isNew ? 'Add New Profile' : 'Edit Profile'}</h2>
        <TextField
          label="Rating"
          value={formData.rating}
          onChange={(e) => onChange({ ...formData, rating: e.target.value })}
        />
        <TextField
          label="Avatar"
          value={formData.avatar}
          onChange={(e) => onChange({ ...formData, avatar: e.target.value })}
        />
        <TextField
          label="Bio"
          multiline
          value={formData.bio}
          onChange={(e) => onChange({ ...formData, bio: e.target.value })}
        />
        <Button variant="contained" color="primary" onClick={onSave}>{isNew ? 'Save' : 'Update'}</Button>
        <Button variant="contained" onClick={onClose}>Cancel</Button>
      </div>
    </Modal>
  );
};

export default ProfileModal;
