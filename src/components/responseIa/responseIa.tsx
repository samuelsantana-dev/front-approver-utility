import { useEffect, useState } from 'react';
import WhatsAppChat from "../whatsappChat/whatsappChat";
import { Box, Modal } from '@mui/material';
import { chatValues } from '../../types/enum';

export const ResponseIa = () => {
  const [responseIA, setResponseIA] = useState<chatValues | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // valores de teste
    const mockChatValues: chatValues = {
      modelName: "Atendimento Automático",
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
    setOpen(true);
  }, []);

  const handleClose = () => setOpen(false);

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
          <WhatsAppChat data={responseIA} />
        )}
      </Box>
    </Modal>
  );
};
