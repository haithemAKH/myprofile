import './App.css';

import ProPhoto from './Profile/ProPhoto';
import FullName from './Profile/FullName';
import Address from './Profile/Address';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {
  return (
    <div className="App">
  
  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

<div className='pro'>
  
      <ProPhoto className="ph"/>
      <FullName />
      <Address />
      </div>
      

    </div>
  );
}

export default App;
