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

export default function RemoveByIdForm({ onRemove }) {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = parseInt(input, 10);
    if (!isNaN(id)) {
      onRemove(id);
      setInput("");
      handleClose();
    }
  };

  return (
    <div>
    <Button onClick={handleOpen} style={{color: 'red'}}>Remove a Woodchuck</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Remove a Woodchuck
        </Typography>
        <form onSubmit={handleSubmit} style={{ marginLeft: 16, marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
      <input
        type="number"
        placeholder="Remove by ID"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: 120, marginRight: 8 }}
      />
      <button type="submit">Remove</button>
    </form>
      </Box>
    </Modal>
  </div>
  );
}
