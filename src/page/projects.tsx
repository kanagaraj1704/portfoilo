import { Navbar } from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
        image: "https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_1280.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Material-UI"],
        liveDemo: "https://example.com/ecommerce",
        sourceCode: "https://github.com/yourusername/ecommerce"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676_1280.png",
        technologies: ["React", "Firebase", "Redux", "Material-UI"],
        liveDemo: "https://example.com/taskmanager",
        sourceCode: "https://github.com/yourusername/taskmanager"
    },
    {
        title: "Social Media Dashboard",
        description: "A comprehensive social media analytics dashboard that aggregates data from multiple platforms and presents it in an intuitive interface.",
        image: "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png",
        technologies: ["React", "D3.js", "Node.js", "OAuth"],
        liveDemo: "https://example.com/dashboard",
        sourceCode: "https://github.com/yourusername/dashboard"
    }
];

export const ProjectsPage = () => {
    return (
        <>
            <Navbar />
            <div className="bg-light min-vh-100 py-5">
                <div className="container py-4">
                    <h2 className="text-center mb-5 fw-bold text-dark">
                        My Projects
                    </h2>
                    <div className="row g-4">
                        {projects.map((project, index) => (
                            <div className="col-12 col-md-6 col-lg-4" key={index}>
                                <div className="card h-100 shadow-sm border-0 rounded-3 project-card">
                                    <img
                                        src={project.image}
                                        className="card-img-top"
                                        alt={project.title}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title fw-bold mb-3">{project.title}</h5>
                                        <p className="card-text text-muted mb-3">{project.description}</p>
                                        <div className="mb-3">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="badge bg-primary me-2 mb-2"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-auto d-flex flex-column flex-sm-row gap-2">
                                            <a
                                                href={project.liveDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
                                            >
                                                <FaExternalLinkAlt /> Live Demo
                                            </a>
                                            <a
                                                href={project.sourceCode}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2"
                                            >
                                                <FaGithub /> View Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>
                {`
                    .project-card {
                        transition: transform 0.2s ease-in-out;
                    }
                    .project-card:hover {
                        transform: translateY(-8px);
                    }
                    .btn {
                        padding: 0.5rem 1rem;
                        font-weight: 500;
                    }
                    .badge {
                        font-weight: 500;
                        padding: 0.5em 0.8em;
                    }
                `}
            </style>
        </>
    );
}; 