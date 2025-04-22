import { useState } from 'react';
import WhatsAppChat from "../whatsappChat/whatsappChat";
import { Box, TextField, Select, MenuItem, Typography, Button, Paper, FormControl, InputLabel } from '@mui/material';

export const MessageTemplatePreview = () => {
  const [modelName, setModelName] = useState('');
  const [modelCategory, setModelCategory] = useState('Utility');
  const [messageContent, setMessageContent] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const handleSubmit = () => {
    const templateData = {
      modelName,
      modelCategory,
      messageContent,
      // Adicione outros campos conforme necessário
    };
    
    console.log("Dados do Template:", templateData);
    // Aqui você pode adicionar uma chamada API para enviar os dados
    // Exemplo: axios.post('/api/templates', templateData)
    
    setShowPreview(true);
    alert("Template enviado para análise com sucesso!");
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f5f5', p: 2 }}>
      <Box sx={{ flex: 1, maxWidth: 'xl', mr: 2 }}>
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h5" component="h1" sx={{ mb: 3, fontWeight: 600 }}>
            Criar modelo
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Nome do Modelo"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              fullWidth
              placeholder="Digite o nome do modelo"
            />

            <FormControl fullWidth>
              <InputLabel>Categoria do modelo</InputLabel>
              <Select
                value={modelCategory}
                label="Categoria do modelo"
                onChange={(e) => setModelCategory(e.target.value)}
              >
                <MenuItem value="Utility">Utility</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
                <MenuItem value="Sales">Sales</MenuItem>
              </Select>
            </FormControl>

            <Box>
              <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                Idiomas
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Typography sx={{ color: 'success.main' }}>Portuguese (BR)</Typography>
                <Button sx={{ minWidth: 'auto', p: 0, color: 'text.secondary' }}>×</Button>
              </Box>
              <Button sx={{ color: 'primary.main', textTransform: 'none' }}>
                + Novo idioma
              </Button>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Cabeçalho <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Opcional</Typography>
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
                {['Texto', 'Imagem', 'Video', 'Arquivo'].map((item) => (
                  <Button
                    key={item}
                    variant="outlined"
                    sx={{
                      px: 2,
                      py: 1.5,
                      color: 'text.secondary',
                      borderColor: 'divider',
                      '&:hover': { bgcolor: 'action.hover' }
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ mb: 1 }}>Mensagem</Typography>
              <TextField
                multiline
                rows={4}
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
                fullWidth
                placeholder="Conteúdo da Mensagem"
              />
            </Box>

            <Box>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Rodapé <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Opcional</Typography>
              </Typography>
              <TextField
                fullWidth
                placeholder="Texto do rodapé"
              />
            </Box>

            <Box>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Botões <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Opcional</Typography>
              </Typography>
              <Button sx={{ color: 'primary.main', textTransform: 'none' }}>
                + Adicionar botão
              </Button>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark' }
              }}
              onClick={handleSubmit}
            >
              Enviar Para Análise
            </Button>

            {showPreview && (
              <Paper sx={{ p: 3, mt: 3, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>Pré-visualização do Template</Typography>
                <Typography><strong>Nome do Modelo:</strong> {modelName}</Typography>
                <Typography><strong>Categoria:</strong> {modelCategory}</Typography>
                <Typography><strong>Mensagem:</strong> {messageContent}</Typography>
              </Paper>
            )}
          </Box>
        </Paper>
      </Box>

      <Box sx={{ width: 400, flexShrink: 0 }}>
        <WhatsAppChat 
          contactName="Erico Rocha"
          contactAvatar="/lovable-uploads/5204afa5-366b-4bf7-b054-4274515582ab.png"
          onBackClick={() => console.log('Back clicked')}
          onSendMessage={(message) => console.log('Message sent:', message)}
          templateContent={messageContent}
          initialMessages={[
            {
              id: '1',
              text: messageContent || 'Conteúdo da Mensagem',
              sender: 'contact',
              timestamp: new Date()
            }
          ]}
        />
      </Box>
    </Box>
  );
};