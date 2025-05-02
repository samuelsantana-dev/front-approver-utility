import { IconButton, TextField } from "@mui/material";
import { Box } from "@mui/material";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { useState } from "react";

export function FooterChat(){
    const [input,  setInput] = useState('');
    return(
        <Box
            sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 1,
            borderTop: '1px solid #ccc',
            backgroundColor: '#f0f0f0',
            }}
        >
        <IconButton>
          <InsertEmoticonIcon sx={{ color: '#54656f' }} />
        </IconButton>

        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{
            backgroundColor: 'white',
            borderRadius: 20,
            mx: 1,
            '& .MuiOutlinedInput-root': {
              borderRadius: 20,
              paddingRight: 1,
            },
          }}
          InputProps={{
            endAdornment: (
              <>
                <IconButton>
                  <AttachFileIcon sx={{ color: '#54656f' }} />
                </IconButton>
                <IconButton>
                  <CameraAltIcon sx={{ color: '#54656f' }} />
                </IconButton>
              </>
            ),
          }}
        />

        <IconButton sx={{ backgroundColor: '#25D366', color: 'white', ml: 1 }}>
          <KeyboardVoiceIcon />
        </IconButton>
      </Box>
    )
}