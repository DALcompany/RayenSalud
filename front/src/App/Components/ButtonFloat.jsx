import React from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import { Fab, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}))

const ButtonFloat = props => {
  const classes = useStyle()

  return (
    <Link 
      to='/addtutorials' 
      className={classes.fab}>
      <Fab color='secondary' aria-label='add'>
        <AddIcon />
      </Fab>
    </Link>
  )
}

export default ButtonFloat
