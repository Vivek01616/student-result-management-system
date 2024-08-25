import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="bg-dark text-white d-flex justify-content-between align-items-center px-4" style={{ height: '70px' }}>
            {/* Left side content */}
            <div className="navbar-brand">
                Student Result Management System
            </div>

            {/* Right side content */}
            <div>
                <button 
                    className="btn btn-outline-light mx-2" 
                    onClick={() => navigate('/student-login')}
                >
                    Student Login
                </button>
                <button 
                    className="btn btn-outline-light" 
                    onClick={() => navigate('/faculty-login')}
                >
                    Faculty Login
                </button>
            </div>
        </div>
    );
}

export default Navbar;
