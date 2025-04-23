import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import {  } from '@mui/material/Box';
import { UploadFile } from '@mui/icons-material';

interface VideoInputMUIProps {
  onVideoFileSelected?: (file: File) => void;
}

const VideoInputMUI: React.FC<VideoInputMUIProps> = ({ onVideoFileSelected }) => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setVideoUrl(URL.createObjectURL(file));
      if (onVideoFileSelected) {
        onVideoFileSelected(file);
      }
    }
  };

  const handleChooseFile = () => {
    const input = document.getElementById('video-upload') as HTMLInputElement;
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
        accept="video/*"
        id="video-upload"
        onChange={handleVideoChange}
        style={{ display: 'none' }}
        aria-hidden="true"
      />
      <Button
        variant="outlined"
        component="span"
        onClick={handleChooseFile}
        startIcon={<UploadFile />}
      >
        Selecionar Vídeo
      </Button>

      {videoUrl && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <video
            ref={videoRef}
            src={videoUrl}
            controls
            style={{ maxWidth: '400px', maxHeight: '300px', borderRadius: '8px' }}
          />
          <Typography variant="body2">{videoFile?.name}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default VideoInputMUI;
