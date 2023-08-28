import { createRoot } from 'react-dom/client'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import App from './components/App.tsx'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  )
})
