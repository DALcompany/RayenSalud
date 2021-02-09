import React from 'react'
import Layout from './Layout'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from './themeConfig'

const App = props => (
  <ThemeProvider theme={theme}>
    <Layout {...props}/>
  </ThemeProvider>
)

export default App