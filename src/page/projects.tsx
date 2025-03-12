/**
 * Projects Component
 * 
 * Displays a collection of projects in a responsive grid layout.
 * Each project is presented as a card with an image, description,
 * and action buttons for live demo and code repository.
 * 
 * Features:
 * - Responsive grid layout
 * - Project cards with hover effects
 * - Live demo and code repository links
 * - Project images with consistent aspect ratio
 * - Mobile-friendly design
 */

import { Navbar } from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Project data structure
interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    demoUrl: string;
    codeUrl: string;
    technologies: string[];
}

// Sample project data
const projects: Project[] = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
        image: "https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_1280.jpg",
        demoUrl: "https://example.com/ecommerce",
        codeUrl: "https://github.com/yourusername/ecommerce",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Material-UI"]
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676_1280.png",
        demoUrl: "https://example.com/taskmanager",
        codeUrl: "https://github.com/yourusername/taskmanager",
        technologies: ["React", "Firebase", "Redux", "Material-UI"]
    },
    {
        id: 3,
        title: "Social Media Dashboard",
        description: "A comprehensive social media analytics dashboard that aggregates data from multiple platforms and presents it in an intuitive interface.",
        image: "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png",
        demoUrl: "https://example.com/dashboard",
        codeUrl: "https://github.com/yourusername/dashboard",
        technologies: ["React", "D3.js", "Node.js", "OAuth"]
    }
];

export const ProjectsPage = () => {
    return (
        <>
            {/* Navigation Bar */}
            <Navbar />

            {/* Projects Section */}
            <div className="bg-light min-vh-100 py-5">
                <div className="container">
                    {/* Section Header */}
                    <h1 className="text-center mb-5">My Projects</h1>

                    {/* Projects Grid */}
                    <div className="row g-4">
                        {projects.map((project) => (
                            // Project Card
                            <div key={project.id} className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100 shadow-sm project-card">
                                    {/* Project Image */}
                                    <div className="image-container">
                                        <img
                                            src={project.image}
                                            className="card-img-top"
                                            alt={project.title}
                                        />
                                    </div>

                                    {/* Project Details */}
                                    <div className="card-body">
                                        <h5 className="card-title">{project.title}</h5>
                                        <p className="card-text">{project.description}</p>
                                        
                                        {/* Technologies Used */}
                                        <div className="mb-3">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="badge bg-primary me-2"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="card-footer bg-transparent border-0 pb-3">
                                        <div className="d-flex gap-2 justify-content-between">
                                            <a
                                                href={project.demoUrl}
                                                className="btn btn-primary flex-grow-1"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Live Demo of ${project.title}`}
                                            >
                                                <FaExternalLinkAlt className="me-2" />
                                                Live Demo
                                            </a>
                                            <a
                                                href={project.codeUrl}
                                                className="btn btn-outline-primary flex-grow-1"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`View Code of ${project.title}`}
                                            >
                                                <FaGithub className="me-2" />
                                                View Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Component Styles */}
            <style>
                {`
                    /* Card Hover Effect */
                    .project-card {
                        transition: transform 0.2s ease-in-out;
                    }
                    .project-card:hover {
                        transform: translateY(-5px);
                    }

                    /* Image Container */
                    .image-container {
                        position: relative;
                        padding-top: 56.25%; /* 16:9 Aspect Ratio */
                        overflow: hidden;
                    }

                    /* Project Image */
                    .card-img-top {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    /* Card Content */
                    .card-body {
                        flex: 1 1 auto;
                    }

                    /* Technology Badge */
                    .badge {
                        font-weight: 500;
                    }
                `}
            </style>
        </>
    );
}; 