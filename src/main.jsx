import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import Introduction from './Introduction.jsx'
import Layout from './Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<App />}></Route>
          <Route path='/introduction' element={<Introduction />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
