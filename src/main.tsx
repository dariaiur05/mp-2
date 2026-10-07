//kept all same just like in GitHub Rick/Morty and Artworks example - except chose to "import App.css" from headers created by Vite as I deleted everything in there as we do not use it
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
