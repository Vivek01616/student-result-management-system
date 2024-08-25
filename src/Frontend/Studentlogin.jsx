import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function StudentLogin() {
    const [name, setName] = useState('');
    const [rollNumber, setRollNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Name:', name);
        console.log('Roll Number:', rollNumber);
    };

    return (
        <div className="d-flex justify-content-center">
            <Card style={{ width: '500px', marginTop: '60px', marginBottom: '100px', borderRadius: '20px', backgroundColor: '#292423', color: 'white' }}>
                <Card.Body>
                    <Card.Title className="text-center mb-4">Student Login</Card.Title>
                    <Form onSubmit={handleSubmit}  style={{marginLeft:'90px'}}>

                        <Form.Group className="mb-3">
                            <Form.Label>Enter Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{ borderRadius: '50px', width: '80%' }} // Adjust width here
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Roll Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your roll number"
                                value={rollNumber}
                                onChange={(e) => setRollNumber(e.target.value)}
                                style={{ borderRadius: '50px', width: '80%' }} // Adjust width here
                            />
                        </Form.Group>
                        <div style={{marginLeft:'120px'}}>
                            <Button variant="primary" type="submit" style={{ borderRadius: '50px' }}>
                                Login
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default StudentLogin;
