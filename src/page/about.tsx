import { Navbar } from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'Bootstrap', level: 80 },
];

const experiences = [
    {
        title: 'Senior React Developer',
        company: 'Tech Solutions Inc.',
        period: '2022 - Present',
        description: 'Led development of enterprise web applications using React and TypeScript. Implemented CI/CD pipelines and mentored junior developers.',
    },
    {
        title: 'Frontend Developer',
        company: 'Digital Innovations Ltd.',
        period: '2020 - 2022',
        description: 'Developed responsive web applications using React and Redux. Collaborated with UX designers to implement pixel-perfect designs.',
    },
    {
        title: 'Junior Web Developer',
        company: 'StartUp Hub',
        period: '2019 - 2020',
        description: 'Built and maintained client websites using React and Bootstrap. Worked in an agile environment with daily stand-ups and sprint planning.',
    },
];

export const AboutPage = () => {
    return (
        <>
            <Navbar />
            <div className="bg-light min-vh-100 py-5">
                <div className="container py-4">
                    <h2 className="text-center mb-5 fw-bold text-dark">About Me</h2>
                    <div className="row g-4">
                        {/* Profile Section */}
                        <div className="col-12 mb-4">
                            <div className="card shadow-sm border-0 rounded-3">
                                <div className="card-body p-4">
                                    <h3 className="card-title mb-4">Profile</h3>
                                    <p className="lead text-muted">
                                        Passionate React developer with 3+ years of experience in building modern web applications.
                                        Specialized in creating responsive, user-friendly interfaces using React, TypeScript, and modern frontend technologies.
                                        Strong advocate for clean code and best practices in web development.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="col-12 col-lg-6 mb-4">
                            <div className="card shadow-sm border-0 rounded-3 h-100">
                                <div className="card-body p-4">
                                    <h3 className="card-title mb-4">Skills</h3>
                                    <div className="d-flex flex-column gap-4">
                                        {skills.map((skill, index) => (
                                            <div key={index}>
                                                <div className="d-flex justify-content-between mb-1">
                                                    <span className="fw-medium">{skill.name}</span>
                                                    <span className="text-muted">{skill.level}%</span>
                                                </div>
                                                <div className="progress" style={{ height: '8px' }}>
                                                    <div
                                                        className="progress-bar bg-primary"
                                                        role="progressbar"
                                                        style={{ width: `${skill.level}%` }}
                                                        aria-valuenow={skill.level}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Experience Section */}
                        <div className="col-12 col-lg-6 mb-4">
                            <div className="card shadow-sm border-0 rounded-3 h-100">
                                <div className="card-body p-4">
                                    <h3 className="card-title mb-4">Experience</h3>
                                    <div className="d-flex flex-column gap-4">
                                        {experiences.map((exp, index) => (
                                            <div key={index} className="experience-item">
                                                <h5 className="fw-bold mb-1">{exp.title}</h5>
                                                <div className="d-flex justify-content-between mb-2">
                                                    <span className="text-primary">{exp.company}</span>
                                                    <span className="text-muted">{exp.period}</span>
                                                </div>
                                                <p className="text-muted mb-0">{exp.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
                    .card {
                        transition: transform 0.2s ease-in-out;
                    }
                    .card:hover {
                        transform: translateY(-5px);
                    }
                    .progress {
                        background-color: rgba(13, 110, 253, 0.1);
                        border-radius: 10px;
                    }
                    .progress-bar {
                        border-radius: 10px;
                        transition: width 1s ease-in-out;
                    }
                    .experience-item:not(:last-child) {
                        border-bottom: 1px solid rgba(0,0,0,0.1);
                        padding-bottom: 1.5rem;
                    }
                `}
            </style>
        </>
    );
}; 