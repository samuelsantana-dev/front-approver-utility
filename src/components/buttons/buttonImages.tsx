import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import {  UploadFile } from '@mui/icons-material';

interface ImageInputMUIProps {
  onImageFileSelected?: (file: File) => void;
}

const ImageInputMUI: React.FC<ImageInputMUIProps> = ({ onImageFileSelected }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
      if (onImageFileSelected) {
        onImageFileSelected(file);
      }
    }
  };

  const handleChooseFile = () => {
    const input = document.getElementById('image-upload') as HTMLInputElement;
    input.click();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        padding: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
      }}
    >
      <input
        type="file"
        accept="image/*"
        id="image-upload"
        onChange={handleImageChange}
        style={{ display: 'none' }}
         aria-hidden="true"
      />
      <Button
        variant="outlined"
        component="span"
        onClick={handleChooseFile}
        startIcon={<UploadFile />}
      >
        Selecionar Imagem
      </Button>

      {imageUrl && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <img src={imageUrl} alt="Imagem Selecionada" style={{ maxWidth: '200px', maxHeight: '200px', borderRadius: '8px' }} />
          <Typography variant="body2">{imageFile?.name}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ImageInputMUI;
