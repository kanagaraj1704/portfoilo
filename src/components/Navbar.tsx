import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container">
                <Link to="/" className="navbar-brand fw-bold">Portfolio</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-controls="navbarNav"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/projects"
                                className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
                                onClick={() => setIsOpen(false)}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/about"
                                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <style>
                {`
                    .navbar {
                        background-color: transparent;
                        transition: all 0.3s ease-in-out;
                        padding: 1rem 0;
                    }
                    .navbar-scrolled {
                        background-color: rgba(255, 255, 255, 0.95);
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                        backdrop-filter: blur(10px);
                    }
                    .navbar-brand {
                        color: #2c3e50;
                        font-size: 1.5rem;
                    }
                    .nav-link {
                        color: #2c3e50;
                        font-weight: 500;
                        padding: 0.5rem 1rem !important;
                        margin: 0 0.25rem;
                        border-radius: 5px;
                        transition: all 0.2s ease-in-out;
                    }
                    .nav-link:hover {
                        color: #0d6efd;
                        background-color: rgba(13, 110, 253, 0.1);
                    }
                    .nav-link.active {
                        color: #0d6efd;
                        background-color: rgba(13, 110, 253, 0.1);
                    }
                    .navbar-toggler {
                        border: none;
                        padding: 0.5rem;
                    }
                    .navbar-toggler:focus {
                        box-shadow: none;
                    }
                    @media (max-width: 991.98px) {
                        .navbar-collapse {
                            background-color: white;
                            padding: 1rem;
                            border-radius: 10px;
                            margin-top: 0.5rem;
                            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                        }
                        .nav-link {
                            padding: 0.75rem 1rem !important;
                        }
                    }
                `}
            </style>
        </nav>
    );
}; 