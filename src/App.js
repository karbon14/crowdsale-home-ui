import React from 'react'
import moment from 'moment'
import style from './index.css'
import { LanguageProvider } from './Components/SwitcherLang'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
moment.tz.setDefault('America/Argentina/Buenos_Aires')

import { Karbon } from './Pages/Karbon'
import { NoMatch } from './Pages/NoMatch'

const App = () => (
  <React.Fragment>
    <LanguageProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Karbon} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <style jsx global>
        {style}
      </style>
    </LanguageProvider>
  </React.Fragment>
)

export default App
