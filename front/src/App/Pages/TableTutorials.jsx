import React, { useEffect, useState } from 'react'
import { Container, Box, List, ListItem, IconButton, ListItemText } from '@material-ui/core'
import { NavBar, ButtonFloat } from '../Components'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from 'axios'
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline',
  }
}));

const TableTutorials = props => {

  const [tutorial, setTutorial] = useState([])
  const classes = useStyles()

  useEffect(() => {
    showTableTutorial()
  }, [])

  const getAllTutorials = async () => {
    const url = 'https://rayentutorialtestapp.azurewebsites.net/tutorials'
    const { data } = await axios.get(url)

    return data
  }

  const showTableTutorial = async () => {
    const data = await getAllTutorials()
    setTutorial(data)
  }

  return (
    <>
      <NavBar title='Tutoriales'/>
      <Container component='main' maxWidth='xs'>
        <Box>

        </Box>
        <Box>
          <List className={classes.root}>
            {
              tutorial.map((item, key) => (
                <ListItem key={key} className=''>
                  <ListItemText
                    primary={
                      <Box display='flex'>
                        <Box width="100%">
                          {item.nombre}
                        </Box>
                        <Box flexShrink={0} style={{ fontSize: '9pt', color: 'grey' }}>
                          {moment(item.fecha).format('D MMM. YYYY')}
                        </Box>
                      </Box>
                    }
                    secondary={item.profesor}
                  />
                  <Link to={`/details/${item.id}`}>
                    <IconButton edge="end" aria-label="Ver Detalle">
                      <VisibilityIcon />
                    </IconButton>
                  </Link>
                </ListItem>
              ))
            }
            {tutorial.length <= 0 ? 
              <ListItem>
                <ListItemText
                  primary={
                    <Box display='flex'>
                      <Box width="100%">
                        Sin Registros
                      </Box>
                    </Box>
                  }
                />
              </ListItem>
            : null}
          </List>
        </Box>
        <ButtonFloat />
      </Container>
    </>

  )
}

export default TableTutorials
