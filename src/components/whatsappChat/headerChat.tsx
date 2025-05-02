import { IconButton, Typography, Box } from "@mui/material";
import { ArrowLeft, MoreVertical } from 'lucide-react';
import { HeaderValues } from "../../types/enum";

interface HeaderChatProps {
  data: HeaderValues;
  onBackClick?: () => void;
}

export function HeaderChat({ 
  data, 
  onBackClick = () => console.log('Back button clicked') 
}: HeaderChatProps) {
  const { contactName, contactAvatar } = data;

  return (
    <>
      <Box sx={{ bgcolor: '#128C7E', py: 0.5, px: 2, color: 'white' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="caption">12:13 PM</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="caption">•••</Typography>
            <Typography variant="caption">Wi-Fi</Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: '#128C7E',
          color: 'white',
          p: 1,
          position: 'sticky',
          top: 0,
          zIndex: 1
        }}
      >
        <IconButton
          onClick={onBackClick}
          sx={{ color: 'white', mr: 1 }}
        >
          <ArrowLeft size={24} />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <Box
            component="img"
            src={contactAvatar}
            alt={contactName}
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              mr: 1,
              objectFit: 'cover'
            }}
            // onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            //   e.currentTarget.src = "https://via.placeholder.com/40";
            // }}
          />
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            {contactName}
          </Typography>
        </Box>

        <IconButton sx={{ color: 'white' }}>
          <MoreVertical size={24} />
        </IconButton>
      </Box>
    </>
  );
}
