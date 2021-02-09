import React, { useEffect, useState } from 'react'
import { NavBar } from '../Components'
import {
  Paper,
  Container,
  TextField
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
import moment from 'moment'

const FormDetails = props => {
  const [formTutorial, setFormTutorial] = useState({
    title: '',
    teacher: '',
    classMatter: '',
    dateMatter: ''
  })

  const { id } = useParams()

  useEffect(() => {

    getTutorial()

  }, [])

  const getTutorial = async () => {

    const url = `https://rayentutorialtestapp.azurewebsites.net/tutorials/${id}`
    const res = await fetch(url)
    const data = await res.json()

    setFormTutorial({
      title: data.nombre,
      teacher: data.profesor,
      classMatter: data.materia,
      dateMatter: data.fecha
    })

  }

  return (
    <>
      <NavBar title='Detalle' backLink={true} editLink={true} toBack='/tutorials' />
      <Container component='main' maxWidth='xs'>
        <form>
          <Paper style={{ padding: 20 }}>
            <TextField
              required
              fullWidth
              margin='normal'
              id='title'
              name='title'
              autoComplete='off'
              color='secondary'
              variant="outlined"
              disabled={true}
              value={formTutorial.title} />
            <TextField
              required
              fullWidth
              margin='normal'
              id='teacher'
              name='teacher'
              autoComplete='off'
              color='secondary'
              variant="outlined"
              disabled={true}
              value={formTutorial.teacher} />
            <TextField
              required
              fullWidth
              margin='normal'
              id='classMatter'
              name='classMatter'
              autoComplete='off'
              color='secondary'
              variant="outlined"
              disabled={true}
              value={formTutorial.classMatter} />
            <TextField
              color='secondary'
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='dateMatter'
              name='dateMatter'
              placeholder='fecha'
              autoComplete='off'
              disabled={true}
              value={moment(formTutorial.dateMatter).format('DD/MM/YYYY')} />
          </Paper>
        </form>
      </Container>
    </>
  )
}

export default FormDetails
