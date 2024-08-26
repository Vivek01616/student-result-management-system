import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="bg-dark text-white d-flex justify-content-between align-items-center px-4" style={{ height: '70px' }}>
            <div className="navbar-brand">
                Student Result Management System
            </div>
            <div>
                <Link to="/student-login">
                    <button className="btn btn-outline-light mx-2">
                        Student Login
                    </button>
                </Link>
                <Link to="/faculty-login">
                    <button className="btn btn-outline-light">
                        Faculty Login
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
