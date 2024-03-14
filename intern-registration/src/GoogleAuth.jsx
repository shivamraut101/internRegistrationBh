import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

export const GoogleAuth = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/main-dashboard');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100">
    <h1 className="text-center display-3 fw-bold mb-5">Welcome to Intern Registration</h1>
    <button
        onClick={() => loginWithRedirect()}
        className="btn btn-primary btn-lg"
    >
        Login with Auth0
    </button>
</div>

    );
};
