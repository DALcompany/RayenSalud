import React, { useState } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import EditIcon from '@material-ui/icons/Edit';
import { Link, useParams } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  }
}))

const Navbar = props => {

  const classes = useStyle()
  let { id } = useParams()

  const btnBackLink = () => (
    <Link to={props.toBack} className='link'>
      <IconButton
        color="inherit"
        arial-label='menu'>
        <ArrowBackIosIcon />
      </IconButton>
    </Link>
  )

  const btnEditLink = () => (
    <Link to={`/edit/${id}`} className='link'>
      <IconButton
        color="inherit"
        arial-label='menu'>
        <EditIcon />
      </IconButton>
    </Link>
  )

  return (
    <AppBar
      color="secondary">
      <Toolbar>
        {props.backLink ? btnBackLink() : null}
        <Typography variant='h5' className={classes.title}>
          {props.title}
        </Typography>
        {props.editLink ? btnEditLink() : null}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar