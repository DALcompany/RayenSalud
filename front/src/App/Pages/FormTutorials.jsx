import React, { useState } from 'react'
import swal from 'sweetalert'
import { NavBar } from '../Components'
import {
  Paper,
  Button,
  CircularProgress,
  Container,
  TextField
} from '@material-ui/core'

const FormTutorials = props => {

  const [formTutorial, setFormTutorial] = useState({
    title: '',
    teacher: '',
    classMatter: '',
    dateMatter: ''
  })

  const [loading, setLoading] = useState(false)

  const setForm = (e) => {
    setFormTutorial({
      ...formTutorial,
      [e.target.name]: e.target.value
    })
  }

  const resetForm = () => {
    setFormTutorial({
      title: '',
      teacher: '',
      classMatter: '',
      dateMatter: ''
    })
  }

  const addTutorial = async (event) => {
    event.preventDefault()

    const url = 'https://rayentutorialtestapp.azurewebsites.net/createtutorial'
    let msg

    setLoading(true)

    const body = {
      nombre: formTutorial.title,
      profesor: formTutorial.teacher,
      materia: formTutorial.classMatter,
      fecha: formTutorial.dateMatter
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }

    const res = await fetch(url, requestOptions)

    if (res.ok) {
      msg = {
        title: 'Exito',
        text: 'Tutorial agregado con exito.',
        icon: 'success',
      }

      resetForm()
      
    } else {
      msg = {
        title: 'Error',
        text: 'Error al agregar Tutorial',
        icon: 'error',
      }
    }

    setLoading(false)
    swal(msg)
    window.location.pathname = '/tutorials'

  }

  return (
    <>
      <NavBar title='Agregar' backLink={true} toBack='/tutorials' />
      <Container component='main' maxWidth='xs'>
        <form onSubmit={addTutorial}>
          <Paper style={{ padding: 20 }}>
            <TextField
              required
              fullWidth
              margin='normal'
              id='title'
              name='title'
              autoComplete='off'
              color='secondary'
              onChange={setForm}
              value={formTutorial.title}
              label='Titulo'
              variant='outlined' />
            <TextField
              required
              fullWidth
              margin='normal'
              id='teacher'
              name='teacher'
              autoComplete='off'
              color='secondary'
              onChange={setForm}
              value={formTutorial.teacher}
              label='Profesor'
              variant='outlined' />
            <TextField
              required
              fullWidth
              margin='normal'
              id='classMatter'
              name='classMatter'
              autoComplete='off'
              color='secondary'
              onChange={setForm}
              value={formTutorial.classMatter}
              label='Materia'
              variant='outlined' />
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
              type='date'
              onChange={setForm}
              value={formTutorial.dateMatter} />
            <Button type='submit'
              variant='contained'
              color='secondary'
              fullWidth>
              {loading ? <CircularProgress size={17} /> : 'Agregar'}
            </Button>
          </Paper>
        </form>
      </Container>
    </>
  )
}

export default FormTutorials
