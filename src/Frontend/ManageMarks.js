import React from 'react';
import { Table, Button, Card } from 'react-bootstrap';

function ManageMarks() {
    // Sample data for students and their marks in subjects
    const students = [
        { id: 1, name: 'John Doe', marks: { Math: 85, Science: 90 } },
        { id: 2, name: 'Jane Smith', marks: { English: 78, History: 82 } },
        { id: 3, name: 'Bob Johnson', marks: { Physics: 92, Chemistry: 88 } },
    ];

    // Function to calculate the percentage and CGPA
    const calculateResults = (marks) => {
        const totalMarks = Object.values(marks).reduce((sum, mark) => sum + mark, 0);
        const maxMarks = Object.keys(marks).length * 100; // Assuming each subject is out of 100
        const percentage = (totalMarks / maxMarks) * 100;

        // CGPA Calculation (Assuming percentage to CGPA conversion: 10-point scale)
        const cgpa = percentage / 9.5; // CGPA out of 10

        return { totalMarks, maxMarks, percentage, cgpa: cgpa.toFixed(2) };
    };

    return (
        <Card style={{ marginTop: '50px', borderRadius: '20px', backgroundColor: '#292423', color: 'white', padding: '20px' }}>
            <Card.Header as="h2" style={{ textAlign: 'center', marginBottom: '20px' }}>Manage Marks</Card.Header>
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Subjects & Marks</th>
                        <th>Total Marks</th>
                        <th>Percentage</th>
                        <th>CGPA</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => {
                        const { totalMarks, percentage, cgpa } = calculateResults(student.marks);
                        return (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>
                                    {Object.entries(student.marks).map(([subject, mark]) => (
                                        <div key={subject}>
                                            {subject}: {mark}
                                        </div>
                                    ))}
                                </td>
                                <td>{totalMarks}</td>
                                <td>{percentage.toFixed(2)}%</td>
                                <td>{cgpa}</td>
                                <td>
                                    <Button variant="warning" className="me-2">Edit Marks</Button>
                                    <Button variant="danger">Delete Marks</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Card>
    );
}

export default ManageMarks;
