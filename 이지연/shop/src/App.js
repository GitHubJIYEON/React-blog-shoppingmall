import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import bgimg from './imgs/bg.png' 

function App() {
  return (
    <div className="App">
      <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">renine 렌느</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">New</Nav.Link>
            <Nav.Link href="#features">Best30</Nav.Link>
            <Nav.Link href="#pricing">Top</Nav.Link>
            <Nav.Link href="#pricing">Pants</Nav.Link>
            <Nav.Link href="#pricing">Skirts</Nav.Link>
            <Nav.Link href="#pricing">Dress</Nav.Link>
            <Nav.Link href="#pricing">Outer</Nav.Link>
            <Nav.Link href="#pricing">ACC</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{ backgroundImage : 'url('+ bgimg +')'}}></div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4' >1</div>
            <img src={Process.env.PUBLIC_URL + '/big1.png'} 
             width='80%'></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          <div className='col-md-4'>2</div>
          <div className='col-md-4'>3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
