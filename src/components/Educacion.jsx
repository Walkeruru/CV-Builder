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

const Educacion = (props) => {
  const [education, setEducation] = useState([]);
  const [cantidad, setCantidad] = useState([]);

  const addEducation = () => {
    setCantidad(cantidad.concat(crypto.randomUUID()))
  }

  const cancelar = (e) => {
    setCantidad(cantidad.filter(filtro => { return e.target.dataset.numero != filtro }));
  }

  const guardar = (e) => {
    e.preventDefault();
    setEducation(education.concat({
      nombre: e.target.form[0].value,
      carrera: e.target.form[1].value,
      inicio: e.target.form[2].value,
      fin: e.target.form[3].value,
    }));
    setCantidad(cantidad.filter(filtro => { return e.target.dataset.numero != filtro }));
  }

  return (
    <>
      <Container>
        <Typography variant="h4" sx={{ mt: 1 }}>Educacion:</Typography>
        <hr />
        {education.map(estudio => {
          return <div key={crypto.randomUUID()}>
            <Typography variant="h5" display={"flex"}><Typography variant="h5" fontWeight={'bold'} sx={{ mr: 1 }}> {estudio.nombre} </Typography> {" - " + estudio.carrera} </Typography>
            <Typography variant="h6" color={'#666666'}>{estudio.inicio + " - " + estudio.fin}</Typography>
          </div>
        })}
        {!props.preview && !props.print ? cantidad.map(numero => {
          return <div key={numero}>
            <hr />
            <form>
              <Grid container>
                <Grid item><InputLabel htmlFor={numero}>Instituto: <Input type="text" id={numero} placeholder="Instituto" /></InputLabel></Grid>
                <Grid item><InputLabel htmlFor={numero + 1}>Carrera: <Input type="text" id={numero + 1} placeholder="Carrera" /></InputLabel></Grid>
                <Grid item><InputLabel htmlFor={numero + 2}>Inicio: <Input type="text" id={numero + 2} placeholder={"YYYY"} /></InputLabel></Grid>
                <Grid item><InputLabel htmlFor={numero + 3}>Fin: <Input type="text" id={numero + 3} placeholder={"YYYY o present"} /></InputLabel></Grid>
              </Grid>
              <Button type="submit" onClick={guardar} data-numero={numero} startIcon={<SaveIcon />} >Guardar</Button>
              <Button onClick={cancelar} data-numero={numero} startIcon={<DeleteIcon />} color="error">Cancelar</Button>
            </form>
          </div>
        }) : null}
        {!props.preview && !props.print ? <Button onClick={addEducation} startIcon={<Add />}>Añadir Educacion</Button> : null}
      </Container>
    </>
  )
}

export default Educacion;