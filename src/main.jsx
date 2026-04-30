import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Routersetup'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <GoogleOAuthProvider clientId="691725526921-amfpblrtf3p9a29l8k7ajg693q7o1kui.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>

  // </StrictMode>,
)
