import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { chatValues, HeaderValues } from '../../types/enum';
import { FooterChat } from './footerChat';
import { HeaderChat } from './headerChat';

interface WhatsAppChatProps {
  data: chatValues;
}

const WhatsAppChat: React.FC<WhatsAppChatProps> = ({ data }) => {
  const headerData: HeaderValues = {
    contactAvatar: "/lovable-uploads/5204afa5-366b-4bf7-b054-4274515582ab.png",
    contactName: data.modelName,
  };

  const renderHeaderMedia = () => {
    if (data.header.image) {
      return <img src={URL.createObjectURL(data.header.image)} alt="Header" style={{ maxWidth: '100%', borderRadius: 8 }} />;
    }
    if (data.header.video) {
      return <video src={URL.createObjectURL(data.header.video)} controls style={{ maxWidth: '100%', borderRadius: 8 }} />;
    }
    // if (data.header.audio) {
    //   return <audio src={URL.createObjectURL(data.header.audio)} controls style={{ width: '100%' }} />;
    // }
    return null;
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '50%',
        maxWidth: 360,
        mx: 'auto',
        overflow: 'hidden',
        borderRadius: 2
      }}
    >
      <HeaderChat data={headerData} />

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          bgcolor: '#E5DDD5',
          backgroundImage: `url("data:image/svg+xml,...")`
        }}
      >
        
        {(data.header.text || data.header.image || data.header.video) && (
          <Box sx={{
            bgcolor: '#EDF7FF',
            borderRadius: 2,
            p: 2,
            mb: 2,
            border: '1px dashed #128C7E',
            textAlign: 'center'
          }}>
            {renderHeaderMedia()}
            {data.header.text && (
              <Typography variant="body1" sx={{ mt: 1 }}>
                {data.header.text}
              </Typography>
            )}
          </Box>
        )}

        {/* Mensagem principal */}
        <Box
          sx={{
            maxWidth: '80%',
            bgcolor: '#EDF7FF',
            borderRadius: '18px 18px 18px 0',
            p: 2,
            mb: 2,
            border: '1px dashed #128C7E',
            boxShadow: 1,
            wordBreak: 'break-word'
          }}
        >
          <Typography variant="body1">{data.messageContent}</Typography>
          {data.footerContent && (
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mt: 1,
                color: '#666'
              }}
            >
              {data.footerContent}
            </Typography>
          )}
        </Box>
      </Box>
      <FooterChat />
    </Paper>
  );
};

export default WhatsAppChat;
