import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { PageLayout } from '@/components'
import { MyPage } from '@/pages'
import { HOME_PAGES, MY_PAGE } from '@shared/constants'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <HashRouter>
      <Routes>
        <Route path={HOME_PAGES} element={<PageLayout />}>
          <Route path={MY_PAGE} element={<MyPage />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
