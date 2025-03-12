import { Navbar } from '../components/Navbar';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ContactPage = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <>
            <Navbar />
            <div className="bg-light min-vh-100 py-5">
                <div className="container py-4">
                    <h2 className="text-center mb-5 fw-bold text-dark">Contact Me</h2>
                    <div className="row g-4">
                        <div className="col-12 col-lg-8">
                            <div className="card shadow-sm border-0 rounded-3">
                                <div className="card-body p-4">
                                    <h3 className="card-title mb-4">Send a Message</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="name" className="form-label">Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        placeholder="Your Name"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        placeholder="Your Email"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="subject" className="form-label">Subject</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="subject"
                                                        placeholder="Subject"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="message" className="form-label">Message</label>
                                                    <textarea
                                                        className="form-control"
                                                        id="message"
                                                        rows={6}
                                                        placeholder="Your Message"
                                                        required
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary px-4 py-2">
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="card shadow-sm border-0 rounded-3 h-100">
                                <div className="card-body p-4">
                                    <h3 className="card-title mb-4">Contact Information</h3>
                                    <div className="d-flex flex-column gap-4">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="contact-icon">
                                                <FaEnvelope size={20} />
                                            </div>
                                            <div>
                                                <h6 className="mb-1">Email</h6>
                                                <a href="mailto:your.email@example.com" className="text-decoration-none text-muted">
                                                    your.email@example.com
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="contact-icon">
                                                <FaLinkedin size={20} />
                                            </div>
                                            <div>
                                                <h6 className="mb-1">LinkedIn</h6>
                                                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted">
                                                    linkedin.com/in/yourusername
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="contact-icon">
                                                <FaGithub size={20} />
                                            </div>
                                            <div>
                                                <h6 className="mb-1">GitHub</h6>
                                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted">
                                                    github.com/yourusername
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="contact-icon">
                                                <FaMapMarkerAlt size={20} />
                                            </div>
                                            <div>
                                                <h6 className="mb-1">Location</h6>
                                                <p className="text-muted mb-0">Your City, Country</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
                    .contact-icon {
                        width: 40px;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        background-color: rgba(13, 110, 253, 0.1);
                        color: #0d6efd;
                    }
                    .form-control:focus {
                        border-color: #0d6efd;
                        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
                    }
                    .card {
                        transition: transform 0.2s ease-in-out;
                    }
                    .card:hover {
                        transform: translateY(-5px);
                    }
                `}
            </style>
        </>
    );
}; 