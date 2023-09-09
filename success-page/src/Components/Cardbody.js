import '../CSS/Cardbody.css';
import { Button, Card, } from 'react-bootstrap';
import Picture from '../images/Rectangle245.png'

function Cardbody() {
  return (
    <>
    
    <div style={{textAlign:'center'}}>
    <p style={{fontWeight:'600',color:'#ffffff'}} className='mt-3'>Register Edfling as a</p>
    <Button style={{color:'#215D4F' ,margin:'5px', backgroundColor:'#ffffff'}} variant="light">Mentor</Button>
    </div>
     <Card className="card-body">
     <div >
    <h1  className='header'>Registration as Mentor was successful</h1>
    <Button className='start-btn' variant="light">start exploring</Button>
    <img className='img-style' src={Picture} alt='img'/>
    </div>
     </Card>

    </>
  );
}

export default Cardbody;
