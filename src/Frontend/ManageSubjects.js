import React from 'react';
import { Table, Button, Card } from 'react-bootstrap';

function ManageSubjects() {
    // Sample data for students and their subjects
    const students = [
        { id: 1, name: 'John Doe', subjects: ['Math', 'Science'] },
        { id: 2, name: 'Jane Smith', subjects: ['English', 'History'] },
        { id: 3, name: 'Bob Johnson', subjects: ['Physics', 'Chemistry'] },
    ];

    return (
        <Card style={{ marginTop: '50px', borderRadius: '20px', backgroundColor: '#292423', color: 'white', padding: '20px' }}>
            <Card.Header as="h2" style={{ textAlign: 'center', marginBottom: '20px' }}>Manage Subjects of Students</Card.Header>
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Registered Subjects</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.subjects.join(', ')}</td>
                            <td>
                                <Button variant="warning" className="me-2">Edit Subjects</Button>
                                <Button variant="danger">Remove Subjects</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    );
}

export default ManageSubjects;
