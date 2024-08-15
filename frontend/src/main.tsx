import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import SideBarContextAdminProvider from './contexts/SideBarContextAdmin.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <SideBarContextAdminProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </SideBarContextAdminProvider>
    </Provider>
  </React.StrictMode>,
)
