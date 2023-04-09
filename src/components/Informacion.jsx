import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

class Informacion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Tu Nombre",
      title: "Titulo",
      email: "Email",
      number: "Telefono",
      hidden: true,
      estadoBoton: false,
    }
    this.btnChange = this.btnChange.bind(this)
    this.editar = this.editar.bind(this)
  }
  
  btnChange(e){
    if(e.target.id == "name"){this.setState({
      name: e.target.value,
    })}
    else if(e.target.id == "title"){
      this.setState({
        title: e.target.value,
      })
    }
    else if(e.target.id == "email"){
      this.setState({
        email: e.target.value,
      })
    }
    else if(e.target.id == "number"){
      this.setState({
        number: e.target.value,
      })
    }
  }
  editar(){
    this.setState({
      name: this.state.name,
      title: this.state.title,
      number: this.state.number,
      hidden: !this.state.hidden,
      estadoBoton: !this.state.estadoBoton,
    }) 
  }

  render(){
    let inputName
    let inputTitle
    let inputEmail
    let inputNumber
    if(!this.state.hidden && !this.props.preview && !this.props.print){
      inputName = <InputLabel htmlFor="name">Nombre: <Input type="text" onChange={this.btnChange} id='name' placeholder="Nombre" /></InputLabel>
      inputTitle = <InputLabel htmlFor="title">Titulo: <Input type="text" onChange={this.btnChange} id='title' placeholder="Titulo"  /></InputLabel>
      inputEmail = <InputLabel htmlFor="email">Email: <Input type="email" onChange={this.btnChange} id='email' placeholder="Email"  /></InputLabel>
      inputNumber = <InputLabel htmlFor="number">Telefono: <Input type="tel" onChange={this.btnChange} id='number' placeholder="Telefono"  /></InputLabel>
    }
    let buttonEdit
    if(!this.props.preview && !this.props.print){
      buttonEdit =  <Button onClick={this.editar}>{ this.state.estadoBoton ? "Guardar" : "Editar"}</Button>
    }
    return (  
      <div>
        <Container>
          <Grid container>
            <Grid item xs={12} md={9}>
              <div>
                <Typography variant='h2' fontWeight={'500'}>{this.state.name}</Typography>
                <Typography variant='h4'fontWeight={'100'}>{this.state.title}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box>
                <Typography display={'flex'} alignItems={'center'} sx={{mt:4}}> <EmailIcon sx={{mx:1}} /> {this.state.email}</Typography>
                <Typography display={'flex'} alignItems={'center'}> <PhoneIcon sx={{mx:1}} /> {this.state.number}</Typography>
              </Box>
           </Grid>
          </Grid>
        {buttonEdit}
        <div>
          {inputName}
          {inputTitle}
          {inputEmail}
          {inputNumber}
        </div>
        </Container>
      </div>
    )
  }
}

export default Informacion;