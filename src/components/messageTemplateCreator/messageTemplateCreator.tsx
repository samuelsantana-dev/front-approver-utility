import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import WhatsAppChat from "../whatsappChat/whatsappChat";
import { Box, TextField, Select, MenuItem, Typography, Button, Paper, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import ImageInputMUI from '../buttons/buttonImages';
import VideoInputMUI from '../buttons/buttonVideo';
import TextInputMUI from '../buttons/buttonText';
import { LanguageSelector } from '../buttons/newLenguage';
import React from 'react';
import { Botoes, chatValues } from '../../types/enum';
import { ResponseIa } from '../responseIa/responseIa';


type HeaderType = 'text' | 'image' | 'video' | null;


export const MessageTemplatePreview = () => {
  const { control, handleSubmit, setValue, watch, formState: { errors } } = useForm<chatValues>({
    defaultValues: {
      modelName: '',
      modelCategory: 'Utility',
      messageContent: '',
      footerContent: '',
      buttonUrlOrResponse: 0,
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

  const onSubmit = async (data: chatValues) => {
  
    setShowPreview(true);
    try {
      console.log("Dados do Template:", data);
    } catch (error) {
      console.error('Erro ao enviar dados como JSON:', error);
    }
    
    alert("Template enviado para análise com sucesso!");
  };

  const formValues = watch();

  const [age, setAge] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', width: '100%', bgcolor: '#f5f5f5', p: 2 }}>
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
 
          <Controller
            name="buttonUrlOrResponse"
            control={control}
            render={({ field }) => (
              <Box>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Botões <Typography component="span" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>Opcional</Typography>
                </Typography>
                <FormControl sx={{ m: 1, width: '100%' }}>
                  <InputLabel id="buttonUrlOrResponse">Age</InputLabel>
                  <Select
                    {...field}
                    labelId="buttonUrlOrResponse"
                    id="buttonUrlOrResponse"
                    name='buttonUrlOrResponse'
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={Botoes.buttonUrl}>Botão de url</MenuItem>
                    <MenuItem value={Botoes.buttonResponse}>Botão de resposta</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            )}
          />

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
              <ResponseIa />
            )}
          </Box>
        </Paper>
      </Box>

      <Box sx={{ width: 400, flexShrink: 0 }}>
      <WhatsAppChat
          data={formValues}
        />
      </Box>
    </Box>
  );
};
