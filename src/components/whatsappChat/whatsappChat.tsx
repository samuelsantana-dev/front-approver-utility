import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { chatValues, HeaderValues } from '../../types/enum';
import { FooterChat } from './footerChat';
import { HeaderChat } from './headerChat';

interface WhatsAppChatProps {
  data: chatValues;
}
interface WhatsAppChatProps {
  contactName?: string;
  contactAvatar?: string;
  initialMessages?: Message[];
  templateContent?: string;
  rodape?: string;
  headerText?: string;
  headerImage?: File | null;
  headerVideo?: File | null;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'contact';
  timestamp: Date;
}

const WhatsAppChat: React.FC<WhatsAppChatProps> = ({
  initialMessages = [],
  templateContent = '',
  rodape = '',
  headerText = '',
  headerImage = null,
  headerVideo = null,
}) => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const baseMessages = [...initialMessages];
    
    if (templateContent) {
      baseMessages.push({
        id: 'template',
        text: templateContent,
        sender: 'contact',
        timestamp: new Date()
      });
    }
    
    return baseMessages;
  });

  
  useEffect(() => {
    setMessages(prev => {
      const filtered = prev.filter(msg => msg.id !== 'template');
      if (templateContent) {
        filtered.push({
          id: 'template',
          text: templateContent,
          sender: 'contact',
          timestamp: new Date()
        });
      }
      return filtered;
    });
  }, [templateContent]);

  const renderHeaderMedia = () => {
    if (headerImage) {
      return (
        <img 
          src={URL.createObjectURL(headerImage)} 
          alt="Header" 
          style={{ 
            maxWidth: '100%', 
            maxHeight: 200,
            borderRadius: 8, 
            marginBottom: 8,
            objectFit: 'cover'
          }}
        />
      );
    }
    if (headerVideo) {
      return (
        <video 
          controls 
          style={{ 
            maxWidth: '100%', 
            maxHeight: 200,
            borderRadius: 8, 
            marginBottom: 8 
          }}
        >
          <source src={URL.createObjectURL(headerVideo)} />
        </video>
      );
    }
    return null;
  };

  const headerData: HeaderValues = {
    contactAvatar: "/lovable-uploads/5204afa5-366b-4bf7-b054-4274515582ab.png",
    contactName: "Nome da sua API",
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
     <HeaderChat data={headerData}  /> 
      
      <Box 
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          bgcolor: '#E5DDD5',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e0d6cc' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      >
        {/* Template Header */}
        {(headerText || headerImage || headerVideo) && (
          <Box sx={{
            bgcolor: '#EDF7FF',
            borderRadius: 2,
            p: 2,
            mb: 2,
            border: '1px dashed #128C7E',
            textAlign: 'center'
          }}>
            {renderHeaderMedia()}
            {headerText && (
              <Typography variant="body1" sx={{ mt: 1 }}>
                {headerText}
              </Typography>
            )}
          </Box>
        )}

        {messages.map((msg) => (
          <Box 
            key={msg.id}
            sx={{
              maxWidth: '80%',
              bgcolor: msg.id === 'template' ? '#EDF7FF' : 
                       msg.sender === 'user' ? '#DCF8C6' : 'white',
              borderRadius: msg.sender === 'user' ? '18px 18px 0 18px' : '18px 18px 18px 0',
              p: 2,
              mb: 2,
              ml: msg.sender === 'user' ? 'auto' : 0,
              border: msg.id === 'template' ? '1px dashed #128C7E' : 'none',
              boxShadow: 1,
              wordBreak: 'break-word'
            }}
          >
            <Typography variant="body1">{msg.text}</Typography>
            {rodape && msg.id === 'template' && (
              <Typography 
                variant="caption" 
                sx={{ 
                  display: 'block', 
                  mt: 1,
                  color: '#666'
                }}
              >
                {rodape}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
        <FooterChat />
    </Paper>
  );
};

export default WhatsAppChat;