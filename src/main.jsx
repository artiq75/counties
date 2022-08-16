import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './App'
import { ThemeMode } from './elements/ThemeMode'
import { Countries } from './routes/countries'
import { Country } from './routes/country'
import './index.css'

customElements.define('theme-mode', ThemeMode)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Countries />} />
          <Route path=":countryId" element={<Country />} />
          <Route path="*" element={<h1>Page introuvable!</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
