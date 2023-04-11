import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Informacion = (props) => {
  const [name, setName] = useState("Tu Nombre");
  const [title, setTitle] = useState("Titulo");
  const [email, setEmail] = useState("Email");
  const [number, setNumber] = useState("Telefono");
  const [hidden, setHidden] = useState(true);
  const [estadoBoton, setEstadoBoton] = useState(false);

  const btnChange = (e) => {
    if(e.target.id == "name"){
      setName(e.target.value)
    }
    else if(e.target.id == "title"){
     setTitle(e.target.value)
    }
    else if(e.target.id == "email"){
      setEmail(e.target.value)
    }
    else if(e.target.id == "number"){
      setNumber(e.target.value)
    }
  }

  const editar = () => {
    setName(name);
    setTitle(title);
    setEmail(email);
    setNumber(number);
    setHidden(!hidden);
    setEstadoBoton(!estadoBoton);
  }
  
  return(
    <>
      <Container>
          <Grid container>
            <Grid item xs={12} md={9}>
              <div>
                <Typography variant='h2' fontWeight={'500'}>{name}</Typography>
                <Typography variant='h4'fontWeight={'100'}>{title}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box>
                <Typography display={'flex'} alignItems={'center'} sx={{mt:4}}> <EmailIcon sx={{mx:1}} /> {email}</Typography>
                <Typography display={'flex'} alignItems={'center'}> <PhoneIcon sx={{mx:1}} /> {number}</Typography>
              </Box>
           </Grid>
          </Grid>
        {!props.preview && !props.print ? <Button onClick={editar}>{estadoBoton ? "Guardar" : "Editar"}</Button> : null}
        <div>
          {!hidden && !props.preview && !props.print ? [
            <InputLabel htmlFor="name" key={1}>Nombre: <Input type="text" onChange={btnChange} id='name' placeholder="Nombre" /></InputLabel>,
            <InputLabel htmlFor="title" key={2}>Titulo: <Input type="text" onChange={btnChange} id='title' placeholder="Titulo" /></InputLabel>, 
            <InputLabel htmlFor="email" key={3}>Email: <Input type="email" onChange={btnChange} id='email' placeholder="Email" /></InputLabel>,
            <InputLabel htmlFor="number" key={4}>Telefono: <Input type="tel" onChange={btnChange} id='number' placeholder="Telefono" /></InputLabel>
          ] : null}
        </div>
        </Container>
    </>
  )
}
  

export default Informacion;