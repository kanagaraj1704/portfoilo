/**
 * HomePage Component
 * 
 * The main landing page of the portfolio website. Features a responsive hero section
 * with professional introduction, call-to-action buttons, and a floating illustration.
 * 
 * Features:
 * - Responsive layout that adapts to different screen sizes
 * - Hero section with professional introduction
 * - Call-to-action buttons for Projects and Contact
 * - Social media links
 * - Animated floating illustration
 * - Mobile-first design with order switching for better UX
 */

import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export const HomePage = () => {
    // Hook for programmatic navigation
    const navigate = useNavigate();

    return (
        <div className="overflow-hidden">
            {/* Navigation Bar */}
            <Navbar />

            {/* Hero Section */}
            <div className="bg-light min-vh-100">
                <div className="container px-3">
                    {/* Main Content Row */}
                    <div className="row min-vh-100 align-items-center py-4 mx-0">
                        {/* Text Content Section - switches order on mobile */}
                        <div className="col-12 col-md-6 text-center text-md-start order-2 order-md-1">
                            {/* Professional Title */}
                            <h1 className="display-4 fw-bold mb-3 text-dark">
                                React Developer
                            </h1>
                            
                            {/* Tagline */}
                            <h2 className="h4 text-primary mb-3">
                                Turning Ideas into Reality with React
                            </h2>
                            
                            {/* Professional Summary */}
                            <p className="lead text-muted mb-4">
                                With 2 years of experience in React development, I specialize in
                                building responsive, performant, and user-friendly web applications.
                                Passionate about clean code and modern web technologies.
                            </p>

                            {/* Call-to-Action Buttons */}
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start mb-4">
                                <button
                                    className="btn btn-primary px-4 py-2"
                                    onClick={() => navigate('/projects')}
                                    aria-label="View Projects"
                                >
                                    View Projects
                                </button>
                                <button
                                    className="btn btn-outline-primary px-4 py-2"
                                    onClick={() => navigate('/contact')}
                                    aria-label="Contact Me"
                                >
                                    Contact Me
                                </button>
                            </div>

                            {/* Social Media Links */}
                            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-dark social-icon"
                                    aria-label="GitHub Profile"
                                >
                                    <FaGithub size={24} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-dark social-icon"
                                    aria-label="LinkedIn Profile"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                                <a
                                    href="mailto:your.email@example.com"
                                    className="text-dark social-icon"
                                    aria-label="Email Contact"
                                >
                                    <FaEnvelope size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Hero Image Section - appears first on mobile */}
                        <div className="col-12 col-md-6 d-flex justify-content-center order-1 order-md-2 mb-4 mb-md-0">
                            <div className="image-container">
                                <img
                                    src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png"
                                    alt="Developer Illustration"
                                    className="img-fluid developer-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Component Styles */}
            <style>
                {`
                    /* Social Media Icon Styles */
                    .social-icon {
                        transition: transform 0.2s ease-in-out;
                    }
                    .social-icon:hover {
                        transform: translateY(-3px);
                        color: #0d6efd !important;
                    }

                    /* Image Container Styles */
                    .image-container {
                        max-width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    /* Hero Image Styles */
                    .developer-image {
                        animation: float 3s ease-in-out infinite;
                        width: 100%;
                        max-width: 400px;
                        height: auto;
                    }

                    /* Responsive Image Size */
                    @media (max-width: 768px) {
                        .developer-image {
                            max-width: 280px;
                        }
                    }

                    /* Floating Animation */
                    @keyframes float {
                        0% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-20px);
                        }
                        100% {
                            transform: translateY(0px);
                        }
                    }

                    /* Button Styles */
                    .btn {
                        font-weight: 500;
                    }
                `}
            </style>
        </div>
    );
}; 