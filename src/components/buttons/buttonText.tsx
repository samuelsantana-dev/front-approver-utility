import React from 'react';
import { Button, TextField, Box, Typography, Icon } from '@mui/material';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';

function TextInputMUI() {
  const [textValue, setTextValue] = React.useState('');
  const [showTextField, setShowTextField] = React.useState(false);

  const handleClick = () => {
    setShowTextField(!showTextField);
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
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Digite seu texto aqui..."
          fullWidth
          variant="outlined"
          label="Digite algo"
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