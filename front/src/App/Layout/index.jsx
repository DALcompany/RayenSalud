import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import {
  NotFound,
  FormTutorials,
  TableTutorials,
  FormDetails,
  FormEdit
} from '../Pages'

const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar
}))

const Layout = props => {

  // const [btnBackLink, setBtnBackLink] = useState(false)

  // const toggleBtn = () => setBtnBackLink(!btnBackLink)

  const classes = useStyle()

  return (
    <BrowserRouter>
      <Switch>
        <div className={classes.root}>
          <div className={classes.content}>
            <div className={classes.toolbar}></div>
            <Route exact path='/' render={props => <NotFound {...props} />} />
            <Route exact path='/tutorials' render={props => <TableTutorials {...props} />} />
            <Route exact path='/addtutorials' render={props => <FormTutorials {...props} />} />
            <Route exact path='/details/:id' render={props => <FormDetails {...props} />} />
            <Route exact path='/edit/:id' render={props => <FormEdit {...props} />} />
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default Layout
