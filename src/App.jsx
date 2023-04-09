import { Component } from 'react'
import './styles/App.css';
import Informacion from './components/Informacion';
import Educacion from './components/Educacion';
import Experiencia from './components/Experiencia';
import  Button  from '@mui/material/Button';
import Container  from '@mui/material/Container';
import  Typography  from '@mui/material/Typography';
import  Box  from '@mui/material/Box';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previewBotonActive: false,
      printBotonActive: false,
    }
    
    this.handleClick = this.handleClick.bind(this)
    this.handlePrint = this.handlePrint.bind(this)
    }

  handleClick(){
    this.setState({
      previewBotonActive: !this.state.previewBotonActive
    })
  }
  handlePrint(){
    this.setState({
      printBotonActive: !this.state.printBotonActive
    })
    setTimeout(() => {
      print();
      this.setState({
        printBotonActive: !this.state.printBotonActive
      })
    }, "500");
  }

  render(){
    let buttonPrint
    let buttonEdit
    let logo
    if(!this.state.printBotonActive){
      buttonPrint = <Button onClick={this.handlePrint}>Print</Button>
      buttonEdit = <Button onClick={this.handleClick}>{this.state.previewBotonActive ? "Editar" : "Preview CV"}</Button>
      logo = <Typography variant='h1' sx={{my:2, textAlign:'center', fontFamily:'Nabla'}}>CV Builder</Typography>
    }
    return (
      <div className="App">
        <Box sx={{boxShadow:'0 15px 30px rgba(0,0,0,0.15)', borderRadius:'20px', padding:'25px 0', margin:'25px 0' , width:{md:'70%'}}}>
          <Container>
            {logo}
            <hr />
          </Container>
          <Informacion preview={this.state.previewBotonActive} print={this.state.printBotonActive}></Informacion>
          <Educacion preview={this.state.previewBotonActive} print={this.state.printBotonActive}></Educacion>
          <Experiencia preview={this.state.previewBotonActive} print={this.state.printBotonActive}></Experiencia>
          <Container>
            {buttonEdit}
            {buttonPrint}
          </Container>
        </Box>
      </div>
    )
  }
}

export default App
