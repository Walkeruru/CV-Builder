import React, { useState } from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Add from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import Textarea from '@mui/joy/Textarea';

const Experiencia = (props) => {
  const [experiencia, setExperiencia] = useState([]);
  const [cantidad, setCantidad] = useState([]);

  const addExperiencia = () => {
    setCantidad(cantidad.concat(crypto.randomUUID()))
  }

  const cancelar = (e) => {
    setCantidad(cantidad.filter(filtro => { return e.target.dataset.numero != filtro }));
  }

  const guardar = (e) => {
    e.preventDefault();
    setExperiencia(experiencia.concat({
      nombre: e.target.form[0].value,
      carrera: e.target.form[1].value,
      inicio: e.target.form[2].value,
      fin: e.target.form[3].value,
      description: e.target.form[4].value,
    }));
    setCantidad(cantidad.filter(filtro => { return e.target.dataset.numero != filtro }));
  }

  return (
    <>
      <Container>
        <Typography variant="h4">Experiencia:</Typography>
        <hr />
        {experiencia.map(experiencia => {
          return <div key={crypto.randomUUID()}>
            <Typography variant="h5" display={"flex"}><Typography variant="h5" fontWeight={'bold'} sx={{ mr: 1 }}> {experiencia.nombre} </Typography> {" - " + experiencia.carrera} </Typography>
            <Typography variant="h6" color={'#666666'}>{experiencia.inicio + " - " + experiencia.fin}</Typography>
            <Typography>{experiencia.description}</Typography>
          </div>
        })}
        {!props.preview && !props.print ? cantidad.map(numero => {
          return <div key={numero}>
            <hr />
            <form>
              <InputLabel htmlFor={numero}>Compañia: <Input type="text" id={numero} placeholder="Compañia" /></InputLabel>
              <InputLabel htmlFor={numero + 1}>Puesto: <Input type="text" id={numero + 1} placeholder="Puesto" /></InputLabel>
              <InputLabel htmlFor={numero + 2}>Inicio: <Input type="text" id={numero + 2} placeholder={"YYYY"} /></InputLabel>
              <InputLabel htmlFor={numero + 3}>Fin: <Input type="text" id={numero + 3} placeholder={"YYYY o present"} /></InputLabel>
              <InputLabel htmlFor={numero + 4}>Descripcion: <Textarea id={numero + 4} placeholder={"Descripcion corta del puesto"}></Textarea> </InputLabel>
              <Button type="submit" onClick={guardar} data-numero={numero} startIcon={<SaveIcon />}>Guardar</Button>
              <Button onClick={cancelar} data-numero={numero} startIcon={<DeleteIcon />} color="error">Cancelar</Button>
            </form>
          </div>
        }) : null}
        {!props.preview && !props.print ? <Button onClick={addExperiencia} startIcon={<Add />}>Añadir Experiencia</Button> : null}
      </Container>
    </>
  )
}

export default Experiencia;