import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#CE3F4D'
    },
    secondary: {
      main: '#52004F'
    }
  }
})

export default responsiveFontSizes(theme)