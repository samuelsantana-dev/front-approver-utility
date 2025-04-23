import React, { useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';

interface TextInputMUIProps {
  label: string;
  defaultValue?: string;
  onChange?: (text: string) => void;
  multiline?: boolean;
  rows?: number;
}

const TextInputMUI: React.FC<TextInputMUIProps> = ({
  label,
  defaultValue = '',
  onChange,
  multiline = false,
  rows = 1,
}) => {
  const [text, setText] = useState<string>(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
    if (onChange) {
      onChange(newText);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        width: '100%',
      }}
    >
      <Typography variant="subtitle1" component="label" htmlFor={`text-input-${label}`}>
        {label}
      </Typography>
      <TextField
        id={`text-input-${label}`}
        value={text}
        onChange={handleChange}
        multiline={multiline}
        rows={rows}
        variant="outlined"
        fullWidth
      />
    </Box>
  );
};

export default TextInputMUI;
