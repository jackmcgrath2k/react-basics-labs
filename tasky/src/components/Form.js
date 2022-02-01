
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
    <Box
      component="form"
      sx={{
        '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
      }}
      onSubmit={props.submit}
    >
      <div>
        <TextField
          required
          id="outlined-required"
          name="title"
          label="Task Title"
          InputLabelProps={{ shrink: true }}
          onChange={(event) => props.change(event)}
        />
      </div>
      <div>
        <TextField
          required
          name="deadline"
          label="Deadline"
          InputLabelProps={{ shrink: true }}
          type="date"
          onChange={(event) => props.change(event)}
        />
      </div>
      <div>
        <TextField
          required
          select
          id="outlined-required"
          name="priority"
          label="Task Priority"
          InputLabelProps={{ shrink: true }}
          onChange={(event) => props.change(event)}
        >
            <MenuItem value = "Low">Low</MenuItem>
            <MenuItem value = "Medium">Medium</MenuItem>
            <MenuItem value = "High">High</MenuItem>
            </TextField>
      </div>
      <div>
        <TextField
          name="description"
          id="outlined-multiline-static"
          label="Task Details"
          InputLabelProps={{ shrink: true }}
          multiline
          rows={4}
          onChange={(event) => props.change(event)}
        />
      </div>

      <div>
        <Button 
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            m: 1,
            p: 1,
            width: '95%'
          }}
        >
          Add Task
        </Button>
      </div>
    </Box>
    </div>
  )
};

export default AddTaskForm;