import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="bg-light min-vh-100">
                <div className="container">
                    <div className="row min-vh-100 align-items-center py-5">
                        <div className="col-12 col-md-6 text-center text-md-start mb-5 mb-md-0">
                            <h1 className="display-4 fw-bold mb-4 text-dark">
                                React Developer
                            </h1>
                            <h2 className="h4 text-primary mb-4">
                                Turning Ideas into Reality with React
                            </h2>
                            <p className="lead text-muted mb-5">
                                With 2 years of experience in React development, I specialize in
                                building responsive, performant, and user-friendly web applications.
                                Passionate about clean code and modern web technologies.
                            </p>
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start mb-5">
                                <button
                                    className="btn btn-primary px-4 py-2"
                                    onClick={() => navigate('/projects')}
                                >
                                    View Projects
                                </button>
                                <button
                                    className="btn btn-outline-primary px-4 py-2"
                                    onClick={() => navigate('/contact')}
                                >
                                    Contact Me
                                </button>
                            </div>
                            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-dark social-icon"
                                >
                                    <FaGithub size={24} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-dark social-icon"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                                <a
                                    href="mailto:your.email@example.com"
                                    className="text-dark social-icon"
                                >
                                    <FaEnvelope size={24} />
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <img
                                src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png"
                                alt="Developer Illustration"
                                className="img-fluid developer-image"
                                style={{ maxWidth: '500px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
                    .social-icon {
                        transition: transform 0.2s ease-in-out;
                    }
                    .social-icon:hover {
                        transform: translateY(-3px);
                        color: #0d6efd !important;
                    }
                    .developer-image {
                        animation: float 3s ease-in-out infinite;
                    }
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
                    .btn {
                        font-weight: 500;
                    }
                `}
            </style>
        </>
    );
}; 