import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

export default function AddWoodChuckButton({ onAdd }) {
    const [formData, setFormData] = useState({
        id: '',
        firstname: '',
        lastname: '',
        age: '',
        woodPerHour: '',
        location: ''
      });
    
      const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { id, firstname, lastname, age, woodPerHour, location } = event.target.elements;
    if (id.value && firstname.value && lastname.value && age.value && woodPerHour.value && location.value) {
      onAdd(
        {
          id: parseInt(id.value),
          firstName: firstname.value,
          lastName: lastname.value,
          age: parseInt(age.value),
          woodPerHour: parseInt(woodPerHour.value),
          location: location.value,
        },
      );
      handleClose();
  };
};

  return (
    <div>
    <Button onClick={handleOpen}>Add a Woodchuck</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add a Woodchuck
        </Typography>
        <form onSubmit={handleSubmit} style={{ marginLeft: 16, marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
      <input
        type="number"
        placeholder="ID"
        name="id"
        id="id"
        value={formData.id}
        onChange={handleChange}
        style={{ width: 120, marginRight: 8 }}
      />
      <input
        type="text"
        placeholder="First Name"
        name="firstname"
        id="firstname"
        value={formData.firstname}
        onChange={handleChange}
        style={{ width: 120, marginRight: 8 }}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastname"
        id="lastname"
        value={formData.lastname}
        onChange={handleChange}
        style={{ width: 120, marginRight: 8 }}
      />
      <input
        type="number"
        placeholder="Age"
        name="age"
        id="age"
        value={formData.age}
        onChange={handleChange}
        style={{ width: 120, marginRight: 8 }}
      />
      <input
        type="number"
        placeholder="Wood Per Hour"
        name="woodPerHour"
        id="woodPerHour"
        value={formData.woodPerHour}
        onChange={handleChange}
        style={{ width: 120, marginRight: 8 }}
      />
      <input
        type="text"
        placeholder="Location"
        name="location"
        id="location"
        value={formData.location}
        onChange={handleChange}
        style={{ width: 120, marginRight: 8 }}
      />
      <button type="submit">Add</button>
    </form>
      </Box>
    </Modal>
  </div>
  );
}