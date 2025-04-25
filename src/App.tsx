import { Box } from '@mui/material'
import './App.css'
import { MessageTemplatePreview } from './components/messageTemplateCreator/messageTemplateCreator'

function App() {


  return (
    <Box sx={{ margin: 'auto', display: 'flex', gap: 3 }}>
      <MessageTemplatePreview />
    </Box>
  )
}

export default App
