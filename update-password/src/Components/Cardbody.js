import '../CSS/Cardbody.css';

import { Button, Card, Col, Row, Form, FormGroup } from 'react-bootstrap';
import Picture from '../images/cardbody/Rectangle259.png'


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
      <hr className='m-5'/>
      <h4 style={{color:'#215D4F',fontWeight:600}}>Reset Password</h4>
      <div style={{ display: 'grid', placeItems: 'center' }}>
             
                <FormGroup>
                  <Form.Control className=" form" type="email" placeholder="Enter your email address" />
                  <Form.Control className=" form" type="email" placeholder="New Password" />
                  <Form.Control className=" form" type="email" placeholder="Confirm Password" />
                </FormGroup>
              
              {/* Add the checkbox */}
             
            </div>
            <Button className='signup-button my-auto'>Reset</Button>
           
      </Col>
    </Row>
     </Card>

    </>
  );
}

export default Cardbody;
