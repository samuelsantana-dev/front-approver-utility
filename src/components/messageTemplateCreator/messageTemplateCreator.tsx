import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import WhatsAppChat from "../whatsappChat/whatsappChat";
import { Box, TextField, Select, MenuItem, Typography, Button, Paper, FormControl, InputLabel } from '@mui/material';
import ImageInputMUI from '../buttons/buttonImages';
import VideoInputMUI from '../buttons/buttonVideo';
import TextInputMUI from '../buttons/buttonText';
import { LanguageSelector } from '../buttons/newLenguage';

interface FormValues {
  modelName: string;
  modelCategory: string;
  messageContent: string;
  footerContent: string;
  header: {
    text: string;
    image: File | null;
    video: File | null;
    audio: File | null;
  };
}

type HeaderType = 'text' | 'image' | 'video' | null;


export const MessageTemplatePreview = () => {
  const { control, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      modelName: '',
      modelCategory: 'Utility',
      messageContent: '',
      footerContent: '',
      header: {
        text: '',
        image: null,
        video: null,
        audio: null
      }
    }
  });

  const [showPreview, setShowPreview] = useState(false);
  const [activeHeader, setActiveHeader] = useState<HeaderType>(null);

  const handleHeaderTypeChange = (type: HeaderType) => {
    setValue('header.text', '');
    setValue('header.image', null);
    setValue('header.video', null);
    setActiveHeader(type);
  };

  const onSubmit = (data: FormValues) => {
    console.log("Dados do Template:", data);
    setShowPreview(true);
    alert("Template enviado para análise com sucesso!");
  };

  const formValues = watch();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f5f5', p: 2 }}>
      <Box sx={{ flex: 1, maxWidth: 'xl', mr: 2 }}>
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h5" component="h1" sx={{ mb: 3, fontWeight: 600 }}>
            Criar modelo
          </Typography>
          
          <Box 
            component="form" 
            onSubmit={handleSubmit(onSubmit)} 
            sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
          >
            <Controller
              name="modelName"
              control={control}
              rules={{ required: 'Nome do modelo é obrigatório' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nome do Modelo"
                  fullWidth
                  placeholder="Digite o nome do modelo"
                  error={!!errors.modelName}
                  helperText={errors.modelName?.message}
                />
              )}
            />

            <Controller
              name="modelCategory"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel>Categoria do modelo</InputLabel>
                  <Select
                    {...field}
                    label="Categoria do modelo"
                  >
                    <MenuItem value="Utility">Utility</MenuItem>
                    <MenuItem value="Marketing">Marketing</MenuItem>
                    <MenuItem value="Sales">Sales</MenuItem>
                  </Select>
                </FormControl>
              )}
            />

            <Box>
              <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                Idiomas
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <LanguageSelector />
              </Box>
            </Box>

            <Box>
              <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                Cabeçalho (selecione um tipo)
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Button
                  variant={activeHeader === 'text' ? 'contained' : 'outlined'}
                  onClick={() => handleHeaderTypeChange('text')}
                >
                  Texto
                </Button>
                <Button
                  variant={activeHeader === 'image' ? 'contained' : 'outlined'}
                  onClick={() => handleHeaderTypeChange('image')}
                >
                  Imagem
                </Button>
                <Button
                  variant={activeHeader === 'video' ? 'contained' : 'outlined'}
                  onClick={() => handleHeaderTypeChange('video')}
                >
                  Vídeo
                </Button>
              </Box>

              {activeHeader === 'text' && (
                <Controller
                  name="header.text"
                  control={control}
                  render={({ field }) => (
                    <TextInputMUI onTextChange={field.onChange} />
                  )}
                />
              )}

              {activeHeader === 'image' && (
                <Controller
                  name="header.image"
                  control={control}
                  render={({ field }) => (
                    <ImageInputMUI onImageChange={field.onChange} />
                  )}
                />
              )}

              {activeHeader === 'video' && (
                <Controller
                  name="header.video"
                  control={control}
                  render={({ field }) => (
                    <VideoInputMUI onVideoChange={field.onChange} />
                  )}
                />
              )}
            </Box>

            <Controller
              name="messageContent"
              control={control}
              rules={{ required: 'Conteúdo da mensagem é obrigatório' }}
              render={({ field }) => (
                <Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>Mensagem</Typography>
                  <TextField
                    {...field}
                    multiline
                    rows={4}
                    fullWidth
                    placeholder="Conteúdo da Mensagem"
                    error={!!errors.messageContent}
                    helperText={errors.messageContent?.message}
                  />
                </Box>
              )}
            />

            <Controller
              name="footerContent"
              control={control}
              render={({ field }) => (
                <Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Rodapé <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Opcional</Typography>
                  </Typography>
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Texto do rodapé"
                  />
                </Box>
              )}
            />

            <Box>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Botões <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Opcional</Typography>
              </Typography>
              <Button sx={{ color: 'primary.main', textTransform: 'none' }}>
                + Adicionar botão
              </Button>
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark' }
              }}
            >
              Enviar Para Análise
            </Button>

            {showPreview && (
              <Paper sx={{ p: 3, mt: 3, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>Pré-visualização do Template</Typography>
                <Typography><strong>Nome do Modelo:</strong> {formValues.modelName}</Typography>
                <Typography><strong>Categoria:</strong> {formValues.modelCategory}</Typography>
                <Typography><strong>Mensagem:</strong> {formValues.messageContent}</Typography>
              </Paper>
            )}
          </Box>
        </Paper>
      </Box>

      <Box sx={{ width: 400, flexShrink: 0 }}>
      <WhatsAppChat
          // templateContent={formValues.messageContent}
          rodape={formValues.footerContent}
          headerText={formValues.header.text}
          headerImage={formValues.header.image}
          headerVideo={formValues.header.video}
        />
      </Box>
    </Box>
  );
};
