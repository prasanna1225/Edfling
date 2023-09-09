import '../CSS/Cardbody.css';


import { Button, Card, Col, Row } from 'react-bootstrap';
import Picture from '../images/cardbody/Rectangle259.png'
import Otpinput from './Otpinput';

function Cardbody() {
  return (
    <>
    
    <div style={{textAlign:'center'}}>
    <p style={{fontWeight:'600',color:'#ffffff'}} className='mt-3'>Login Edfling as a</p>
    <Button style={{color:'#215D4F' ,margin:'5px',background:'#ffffff'}} variant="light">Mentor</Button>
    </div>
     <Card className="card-body">
    <Row className=''>
      <Col md={6}>
       <img className='img-style' src={Picture} alt='pic'/>
      </Col>
      <Col md={6} className='right-part'>
      <div className='right-side'>
      <h3>Login<span style={{color:'#000000',fontSize:'10px', fontWeight:200}}>as Mentor</span></h3>
      </div>
      <hr className='m-5' />
      <h3 style={{color:'#215D4F',fontWeight:600}}>Verify OTP</h3>
      <div style={{ display: 'grid', placeItems: 'center' }}>
             
                
           <Otpinput/>
             
            </div>
            <Button className='verify-button my-auto'>Verify</Button>
            <div style={{margin:'20px'}}>
              <p>Didn't Receive OTP ? <span><a href='#'>Resend OTP</a></span></p>
              <p className='text-p'>An OTP has been sent to your registered email address please verify it</p>
              
            </div>
      </Col>
    </Row>
     </Card>

    </>
  );
}

export default Cardbody;
