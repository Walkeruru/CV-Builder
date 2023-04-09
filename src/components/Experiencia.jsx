import React, { Component } from "react";
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

class Experiencia extends Component {
  constructor(){
    super()

    this.state = {
      experiencia: [],
      cantidad: [],
    }

    this.addExperiencia = this.addExperiencia.bind(this)
    this.cancelar = this.cancelar.bind(this)
    this.guardar = this.guardar.bind(this)
  }

  addExperiencia(){
    this.setState({
      cantidad: this.state.cantidad.concat(crypto.randomUUID())
    })
  }

  cancelar(e){
    this.setState({
      cantidad: this.state.cantidad.filter(filtro =>{
        return e.target.dataset.numero != filtro
      })
    })
  }

  guardar(e){
    e.preventDefault();
    this.setState({
      experiencia: this.state.experiencia.concat({
        nombre: e.target.form[0].value,
        carrera: e.target.form[1].value,
        inicio: e.target.form[2].value,
        fin: e.target.form[3].value,
        description: e.target.form[4].value,
      }),
      cantidad: this.state.cantidad.filter(filtro =>{
        return e.target.dataset.numero != filtro
      })
    })
  }

  render() {
    let añadirExperiencia 
    if(!this.props.preview && !this.props.print){
      añadirExperiencia = this.state.cantidad.map(numero => {
      return <div key={numero}>
        <form>
        <InputLabel htmlFor={numero}>Compañia: <Input type="text" id={numero} placeholder="Compañia"/></InputLabel>
        <InputLabel htmlFor={numero+1}>Puesto: <Input type="text" id={numero+1} placeholder="Puesto"/></InputLabel>
        <InputLabel htmlFor={numero+2}>Inicio: <Input type="text" id={numero+2} placeholder={"YYYY"}/></InputLabel>
        <InputLabel htmlFor={numero+3}>Fin: <Input type="text" id={numero+3} placeholder={"YYYY o present"}/></InputLabel>
        <InputLabel htmlFor={numero+4}>Descripcion: <Textarea id={numero+4} placeholder={"Descripcion corta del puesto"}></Textarea> </InputLabel>
        <Button type="submit" onClick={this.guardar} data-numero={numero} startIcon={ <SaveIcon />}>Guardar</Button>
        <Button onClick={this.cancelar} data-numero={numero} startIcon={<DeleteIcon />} color="error">Cancelar</Button>
        </form>
      </div>
    })}
    let jobs = this.state.experiencia.map(experiencia => {
      return <div key={crypto.randomUUID()}>
        <Typography variant="h5" display={"flex"}><Typography variant="h5" fontWeight={'bold'} sx={{mr:1}}> {experiencia.nombre} </Typography> {" - " + experiencia.carrera } </Typography>
        <Typography variant="h6" color={'#666666'}>{ experiencia.inicio + " - " + experiencia.fin }</Typography>
        <Typography>{ experiencia.description }</Typography>
        </div>
    })
    let buttonAdd
    if(!this.props.preview && !this.props.print){
      buttonAdd = <Button onClick={this.addExperiencia} startIcon={<Add />}>Añadir Experiencia</Button>
    }
    return (
    <div>
      <Container>
       <Typography variant="h4">Experiencia:</Typography>
      <hr />
        {jobs}
        {añadirExperiencia}
        {buttonAdd}
      </Container>
    </div>
    )
  }
}

export default Experiencia;