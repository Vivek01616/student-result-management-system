import React from 'react';
import { Table, Card, Button } from 'react-bootstrap';

function ResultsSection() {
    // Sample data for students, their subjects, and marks
    const students = [
        { id: 1, name: 'John Doe', results: { Math: 85, Science: 90 } },
        { id: 2, name: 'Jane Smith', results: { English: 78, History: 82 } },
        { id: 3, name: 'Bob Johnson', results: { Physics: 92, Chemistry: 88 } },
    ];

    // Function to calculate the percentage and CGPA
    const calculateResults = (results) => {
        const totalMarks = Object.values(results).reduce((sum, mark) => sum + mark, 0);
        const maxMarks = Object.keys(results).length * 100; // Assuming each subject is out of 100
        const percentage = (totalMarks / maxMarks) * 100;

        // CGPA Calculation (Assuming percentage to CGPA conversion: 10-point scale)
        const cgpa = percentage / 9.5; // CGPA out of 10

        return { totalMarks, percentage, cgpa: cgpa.toFixed(2) };
    };

    // Function to declare result for a single student
    const declareResult = (studentId) => {
        alert(`Result declared for Student ID: ${studentId}`);
    };

    // Function to declare result for all students
    const declareAllResults = () => {
        students.forEach(student => {
            declareResult(student.id);
        });
    };

    return (
        <Card style={{ marginTop: '50px', borderRadius: '20px', backgroundColor: '#292423', color: 'white', padding: '20px' }}>
            <Card.Header as="h2" style={{ textAlign: 'center', marginBottom: '20px' }}>Results Section</Card.Header>
            <Button variant="primary" style={{ marginBottom: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} onClick={declareAllResults}>
                Declare All Results
            </Button>
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
                        const { totalMarks, percentage, cgpa } = calculateResults(student.results);
                        return (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>
                                    {Object.entries(student.results).map(([subject, mark]) => (
                                        <div key={subject}>
                                            {subject}: {mark}
                                        </div>
                                    ))}
                                </td>
                                <td>{totalMarks}</td>
                                <td>{percentage.toFixed(2)}%</td>
                                <td>{cgpa}</td>
                                <td>
                                    <Button variant="success" onClick={() => declareResult(student.id)}>Declare Result</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Card>
    );
}

export default ResultsSection;
