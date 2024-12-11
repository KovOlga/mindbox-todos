import { ReactElement } from 'react';
import { TextField } from '@mui/material';

export default function Input(): ReactElement {
  return <TextField id="outlined-basic" label="What needs to be done?" variant="outlined" />;
}
