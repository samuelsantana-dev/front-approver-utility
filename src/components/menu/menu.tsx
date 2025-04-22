import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Paper
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

export const ModelMenu = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Nome do Modelo
        </Typography>
        <TextField
          fullWidth
          value="drasas"
          variant="outlined"
          size="small"
        />
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Categoria do modelo
        </Typography>
        <FormControl fullWidth size="small">
          <InputLabel id="category-label">Categoria</InputLabel>
          <Select
            labelId="category-label"
            value="Utility"
            label="Categoria"
          >
            <MenuItem value="Utility">Utility</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="Authentication">Authentication</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Idiomas */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Idiomas
        </Typography>
        <FormControl fullWidth size="small">
          <InputLabel id="language-label">Idioma</InputLabel>
          <Select
            labelId="language-label"
            value="Portuguese (BR)"
            label="Idioma"
          >
            <MenuItem value="Portuguese (BR)">Portuguese (BR)</MenuItem>
            <MenuItem value="English (US)">English (US)</MenuItem>
            <MenuItem value="Spanish (ES)">Spanish (ES)</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Botão + Novo idioma */}
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        size="small"
        sx={{ textTransform: 'none' }}
      >
        + Novo idioma
      </Button>
    </Paper>
  );
};