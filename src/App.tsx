import { Box } from '@mui/material'
import './App.css'
import { ModelMenu } from './components/menu/menu'
import { MessageTemplatePreview } from './components/messageTemplateCreator/messageTemplateCreator'

function App() {


  return (
    <Box sx={{ margin: 'auto', display: 'flex', gap: 3 }}>
      <ModelMenu />
      <MessageTemplatePreview />
    </Box>
  )
}

export default App
