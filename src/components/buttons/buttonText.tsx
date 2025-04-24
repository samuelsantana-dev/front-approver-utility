import { useState } from 'react';
import { Button, TextField, Box, Typography, Icon } from '@mui/material';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';

interface TextInputMUIProps {
  onTextChange?: (text: string) => void;
}

function TextInputMUI({ onTextChange }: TextInputMUIProps) {
  const [textValue, setTextValue] = useState('');
  const [showTextField, setShowTextField] = useState(false);

  const handleClick = () => {
    setShowTextField(!showTextField);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setTextValue(newText);
    if (onTextChange) {
      onTextChange(newText);
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 3,
      borderRadius: 2,
    }}>
      <Button
        type="button"
        variant="outlined"
        fullWidth
        startIcon={<Icon component={TextsmsOutlinedIcon} />}
        onClick={handleClick}
      >
        <Typography variant="body1">Texto</Typography>
      </Button>
      {showTextField && (
        <TextField
          type="text"
          value={textValue}
          onChange={handleChange}
          placeholder="Digite seu texto aqui..."
          fullWidth
          variant="outlined"
          label="Digite algo"
          sx={{ mt: 5 }}
          InputProps={{
            startAdornment: (
              <Icon component={TextsmsOutlinedIcon} sx={{ mr: 1 }} color="action" />
            ),
          }}
        />
      )}
    </Box>
  );
}

export default TextInputMUI;