import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function ChangePassword() {
    return (
        <Card style={{ marginTop: '45px', borderRadius: '20px', width: '500px', backgroundColor: '#292423', color: 'white', marginLeft: 'auto', marginRight: 'auto', padding: '20px' }}>
            <Card.Body>
                <Card.Title as="h2" className="text-center mb-4">Change Password</Card.Title>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Enter Old Password</Form.Label>
                        <Form.Control type="password" placeholder="Old Password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Enter New Password</Form.Label>
                        <Form.Control type="password" placeholder="New Password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Re-enter New Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-enter New Password" />
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="primary">Change Password</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default ChangePassword;
