import React, { Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoute'


class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App
