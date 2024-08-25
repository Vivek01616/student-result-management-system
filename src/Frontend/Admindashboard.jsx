import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function AdminDashboard() {
    return (
        <div style={{ display: 'flex' }}>
            <div className="card" style={{ width: '20%', backgroundColor: 'black', height: '500px' }}>
                <div className="text-center text-white mb-3">
                    <h3>Admin Dashboard</h3>
                </div>
                <div className="text-center text-white mb-3">
                    <Link to="manage-students" className="text-white" style={{ textDecoration: 'none' }}>
                        <h5>Manage Students</h5>
                    </Link>
                </div>
                <div className="text-center text-white mb-3">
                    <Link to="manage-subjects" className="text-white" style={{ textDecoration: 'none' }}>
                        <h5>Manage Subjects</h5>
                    </Link>
                </div>
                <div className="text-center text-white mb-3">
                    <Link to="manage-marks" className="text-white" style={{ textDecoration: 'none' }}>
                        <h5>Manage Marks</h5>
                    </Link>
                </div>
                <div className="text-center text-white mb-3">
                    <Link to="results-section" className="text-white" style={{ textDecoration: 'none' }}>
                        <h5>Results Section</h5>
                    </Link>
                </div>
                <div className="text-center text-white mb-3">
                    <Link to="change-password" className="text-white" style={{ textDecoration: 'none' }}>
                        <h5>Change Password</h5>
                    </Link>
                </div>
            </div>
            <div style={{ marginLeft: '20px', width: '80%' }}>
                <Outlet />
            </div>
        </div>
    );
}

export default AdminDashboard;
