import React, { useState, useRef, useEffect } from 'react';
import './styles/App.css';
import Informacion from './components/Informacion';
import Educacion from './components/Educacion';
import Experiencia from './components/Experiencia';
import  Button  from '@mui/material/Button';
import Container  from '@mui/material/Container';
import  Typography  from '@mui/material/Typography';
import  Box  from '@mui/material/Box';

const App = () => {
  const printRef = useRef('');
  const [previewBtnActive, setPreviewBtnActive] = useState(false);
  const [printBtnActive, setPrintBtnActive] = useState(false);

  useEffect(() => {
    printRef.current = printBtnActive;
  }, [printBtnActive]);

  const handleClick = () => {return setPreviewBtnActive(!previewBtnActive)}
  const handlePrint = () => {
    setPrintBtnActive(!printBtnActive)
      setTimeout(() => {
      print();
      setPrintBtnActive(!printRef.current);
    }, "500");
  }

  return(
    <>
      <div className="App">
        <Box sx={{boxShadow:'0 15px 30px rgba(0,0,0,0.15)', borderRadius:'20px', padding:'25px 0', margin:'25px 0' , width:{md:'70%'}}}>
          <Container>
            {!printBtnActive ? <Typography variant='h1' sx={{my:2, textAlign:'center', fontFamily:'Nabla'}}>CV Builder</Typography> : null }
            <hr />
          </Container>
          <Informacion preview={previewBtnActive} print={printBtnActive}></Informacion>
          <Educacion preview={previewBtnActive} print={printBtnActive}></Educacion>
          <Experiencia preview={previewBtnActive} print={printBtnActive}></Experiencia>
          <Container>
            {!printBtnActive ?  <Button onClick={handleClick}>{previewBtnActive ? "Editar" : "Preview CV"}</Button> : null}
            {!printBtnActive ? <Button onClick={handlePrint}>Print</Button> : null}
          </Container>
        </Box>
      </div>
    </>
  )
}


export default App
