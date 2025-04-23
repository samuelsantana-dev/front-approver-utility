import { useState } from 'react';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  List,
  ListItemText,
  Paper,
  Box,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const languages = [
  "Afrikaans",
  "Albanian",
  "Arabic",
  "Azerbaijani",
  "Bengali",
  "Bulgarian",
  "Catalan",
  "Chinese",
  "Croatian",
  "Czech",
  "Danish",
  "Dutch",
  "English",
  "Estonian",
  "Finnish",
  "French",
  "German",
  "Greek",
  "Hebrew",
  "Hindi",
  "Hungarian",
  "Indonesian",
  "Italian",
  "Japanese",
  "Korean",
  "Latvian",
  "Lithuanian",
  "Malay",
  "Norwegian",
  "Persian",
  "Polish",
  "Portuguese",
  "Romanian",
  "Russian",
  "Serbian",
  "Slovak",
  "Slovenian",
  "Spanish",
  "Swedish",
  "Thai",
  "Turkish",
  "Ukrainian",
  "Urdu",
  "Vietnamese"
];

const StyledPaper = styled(Paper)({
  maxHeight: 300,
  overflow: 'auto',
  marginTop: 8,
});

export const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);

  const filteredLanguages = languages.filter(language =>
    language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <FormControl fullWidth>
      <InputLabel id="language-select-label">Select language</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={selectedLanguage}
        label="Select language"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        renderValue={() => selectedLanguage || 'Select language'}
        MenuProps={{
          PaperProps: {
            sx: {
              maxHeight: 300,
              width: 250,
            },
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            autoFocus
          />
        </Box>
        <StyledPaper>
          <List>
            {filteredLanguages.map((language) => (
              <MenuItem 
                key={language} 
                value={language}
                onClick={() => {
                  setSelectedLanguage(language);
                  setOpen(false);
                }}
              >
                <ListItemText primary={language} />
              </MenuItem>
            ))}
          </List>
        </StyledPaper>
      </Select>
    </FormControl>
  );
};