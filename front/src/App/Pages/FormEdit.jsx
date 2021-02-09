import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
import { NavBar } from '../Components'
import {
  Paper,
  Button,
  CircularProgress,
  Container,
  TextField
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const FormEdit = () => {

  const [formTutorial, setFormTutorial] = useState({
    title: '',
    teacher: '',
    classMatter: '',
    dateMatter: ''
  })
  const [loadingUpdate, setLoadingUpdate] = useState(false)
  const [loadingDrop, setLoadingDrop] = useState(false)

  const { id } = useParams()

  useEffect(() => {

    getTutorial(id)

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

  const editTutorial = async (event) => {
    event.preventDefault()

    const url = `https://rayentutorialtestapp.azurewebsites.net/updatetutorial/${id}`
    let msg

    setLoadingUpdate(true)

    const body = {
      nombre: formTutorial.title,
      profesor: formTutorial.teacher,
      materia: formTutorial.classMatter,
      fecha: formTutorial.dateMatter
    }

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }

    const res = await fetch(url, requestOptions)

    if (res.status === 200) {
      msg = {
        title: 'Exito',
        text: 'Tutorial modificado con exito.',
        icon: 'success',
      }

      resetForm()
    } else {
      msg = {
        title: 'Error',
        text: 'Error al modificar Tutorial',
        icon: 'error',
      }
    }

    setLoadingUpdate(false)
    swal(msg)
    window.location.pathname = '/tutorials'

  }

  const dropTutorial = async () => {

    setLoadingDrop(true)

    const url = `https://rayentutorialtestapp.azurewebsites.net/deletetutorial/${id}`
    const res = await axios.delete(url)
    let msg
    
    console.log(res)
    
    if (res.status === 200) {
      msg = {
        title: 'Exito',
        text: 'Tutorial eliminado con exito.',
        icon: 'success',
      }

      resetForm()
    }else{
      msg = {
        title: 'Error',
        text: 'Error al eliminar Tutorial',
        icon: 'error',
      }
    }

    setLoadingDrop(false)
    swal(msg)
    window.location.pathname = '/tutorials'

  }

  return (
    <>
      <NavBar title='Modificar' backLink={true} toBack={`/details/${id}`} />
      <Container component='main' maxWidth='xs'>
        <form onSubmit={editTutorial}>
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
              {loadingDrop ? <CircularProgress size={17} /> : 'Modificar'}
            </Button>
            <Button
              variant='contained'
              color='primary'
              fullWidth
              onClick={dropTutorial}>
              {loadingUpdate ? <CircularProgress size={17} /> : 'Eliminar'}
            </Button>
          </Paper>
        </form>
      </Container>
    </>
  )
}

export default FormEdit
