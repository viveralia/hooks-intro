import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import WithClass from './pages/WithClass'
import WithHooks from './pages/WithHooks'
import WithHooksAndFetch from './pages/WithHooksAndFetch'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={WithClass} />
        <Route exact path='/hooks' component={WithHooks} />
        <Route exact path='/fetch' component={WithHooksAndFetch} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
