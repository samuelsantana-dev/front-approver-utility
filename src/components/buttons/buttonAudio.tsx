import React, { useState, useRef } from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import { PlayArrow, Pause, UploadFile } from '@mui/icons-material';

interface AudioInputMUIProps {
  onAudioFileSelected?: (file: File) => void;
}

const AudioInputMUI: React.FC<AudioInputMUIProps> = ({ onAudioFileSelected }) => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleAudioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAudioFile(file);
      setAudioUrl(URL.createObjectURL(file));
      if (onAudioFileSelected) {
        onAudioFileSelected(file);
      }
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleChooseFile = () => {
    const input = document.getElementById('audio-upload') as HTMLInputElement; // Type assertion
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
        accept="audio/*"
        id="audio-upload"
        onChange={handleAudioChange}
        style={{ display: 'none' }}
        aria-hidden="true"
      />
      <Button
        variant="outlined"
        component="span"
        onClick={handleChooseFile}
        startIcon={<UploadFile />}
      >
        Selecionar Áudio
      </Button>

      {audioUrl && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <audio ref={audioRef} src={audioUrl} />
          <IconButton onClick={handlePlayPause} aria-label={isPlaying ? 'pause' : 'play'}>
            {isPlaying ? <Pause /> : <PlayArrow />}
          </IconButton>
          <Typography variant="body2">{audioFile?.name}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default AudioInputMUI;
