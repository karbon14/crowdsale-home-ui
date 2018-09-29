import React from 'react'
import moment from 'moment'
import style from './index.css'
import Component from '@reactions/component'
import { ToastContainer } from '@react-core/toast'
import { theme } from '@react-core/theme-karbon'
import { LanguageProvider } from './Components/SwitcherLang'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
moment.tz.setDefault('America/Argentina/Buenos_Aires')

import './Assets/preview.jpg'
import { Karbon } from './Pages/Karbon'
import { NoMatch } from './Pages/NoMatch'

const App = () => (
  <Component
    didMount={() => {
      window.addEventListener('load', () => {
        window.dataLayer = window.dataLayer || []
        function gtag() {
          window.dataLayer.push(arguments)
        }
        gtag('js', new Date())

        gtag('config', 'UA-126698710-1')
      })
    }}
    render={() => (
      <LanguageProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Karbon} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
        <ToastContainer theme={theme} hideProgressBar />
        <style jsx global>
          {style}
        </style>
      </LanguageProvider>
    )}
  />
)

export default App
