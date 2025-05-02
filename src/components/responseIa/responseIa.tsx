import { useEffect, useState } from 'react';
import WhatsAppChat from "../whatsappChat/whatsappChat";
import { Box, Button, Modal, Stack } from '@mui/material';
import { chatValues } from '../../types/enum';

export const ResponseIa = () => {
  const [responseIA, setResponseIA] = useState<chatValues | null>(null);
  const [open, setOpen] = useState(false);
  const [iaChance, setIaChance] = useState<number>(0);

  useEffect(() => {
    const mockChatValues: chatValues = {
      modelName: "Atendimento Automático teste",
      modelCategory: "Suporte",
      messageContent: "Olá! Como posso te ajudar hoje?",
      footerContent: "Equipe de Suporte - Disponível 24h",
      buttonUrlOrResponse: 1,
      header: {
        text: "Bem-vindo ao nosso atendimento!",
        image: null,
        video: null,
        audio: null
      }
    };

    setResponseIA(mockChatValues);

    const chance = 85;
    setIaChance(chance);

    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setResponseIA(null);
    setIaChance(0);
  };

  const handleEdit = () => {
    console.log("Carregando dados para edição...", responseIA);
    handleClose();
  };

  const handleApprove = () => {
    console.log("Aprovação enviada para meta.");
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          p: 4,
          boxShadow: 24,
          borderRadius: 2,
          minWidth: 300,
          maxWidth: 500,
        }}
      >
        {responseIA && (
          <>
            <WhatsAppChat data={responseIA} />

            <Stack direction="row" spacing={2} justifyContent="flex-end" mt={3}>
              <Button variant="outlined" color="error" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="outlined" onClick={handleEdit}>
                Editar
              </Button>
              {iaChance >= 80 && (
                <Button variant="contained" color="success" onClick={handleApprove}>
                  Aprovar
                </Button>
              )}
            </Stack>
          </>
        )}
      </Box>
    </Modal>
  );
};
