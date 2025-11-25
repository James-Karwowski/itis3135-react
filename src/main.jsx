import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Introduction from './Introduction.jsx'
import Contract from './Contract.jsx'
import Layout from './Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="contract" element={<Contract />} />
          <Route path="all-introductions" element={<AllIntroductions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)