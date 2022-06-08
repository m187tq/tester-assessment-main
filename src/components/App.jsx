import React, { useState } from 'react'
import LoginForm from './LoginForm'
import {
  createTheme,
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles'
import { Button, Container, CssBaseline } from '@material-ui/core'
import logo from '../logo.png'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2165e3'
    }
  }
})

const useStyles = makeStyles(theme => ({
  appContainer: {
    marginTop: theme.spacing(5),
    textAlign: 'center'
  },
  header: {
    textAlign: 'center',
    height: '15vh',
    backgroundColor: '#2165e3'
  },
  logo: {
    height: '100%'
  },
  smiley: {
    fontSize: 'xxx-large'
  }
}))

function App() {
  const classes = useStyles()
  const [userEmail, setUserEmail] = useState(null)

  const handleSubmit = data => {
    setUserEmail(data.email)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
      </div>
      <Container
        component="main"
        maxWidth="xs"
        className={classes.appContainer}
      >
        <CssBaseline />
        {!userEmail && <LoginForm onSubmit={handleSubmit} />}
        {userEmail && (
          <div>
            <span role="img" className={classes.smiley} aria-label="smiley">
              😄
            </span>
            <h1>Welcome {userEmail}!</h1>
            <Button
              data-testid="logout-button"
              color="primary"
              variant="text"
              onClick={() => setUserEmail(null)}
              type="button"
            >
              Logout
            </Button>
          </div>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default App
