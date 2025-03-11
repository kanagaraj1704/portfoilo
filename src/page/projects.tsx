import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Button,
    Chip,
    Stack,
} from '@mui/material';
import { GitHub as GitHubIcon, Launch as LaunchIcon } from '@mui/icons-material';
import { Navbar } from '../components/Navbar';

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
            <Box
                sx={{
                    background: '#ecf0f1',
                    minHeight: '100vh',
                    pt: { xs: 10, md: 12 },
                    pb: 8,
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            color: '#2c3e50',
                            fontWeight: 'bold',
                        }}
                    >
                        My Projects
                    </Typography>
                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'transform 0.2s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                        },
                                        boxShadow: 3,
                                        borderRadius: 2,
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={project.image}
                                        alt={project.title}
                                        sx={{
                                            objectFit: 'cover',
                                            bgcolor: '#f5f6fa',
                                        }}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                            sx={{ 
                                                color: '#2c3e50',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {project.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                mb: 2,
                                                color: '#7f8c8d',
                                            }}
                                        >
                                            {project.description}
                                        </Typography>
                                        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                            {project.technologies.map((tech, techIndex) => (
                                                <Chip
                                                    key={techIndex}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: '#3498db',
                                                        color: 'white',
                                                        '&:hover': {
                                                            bgcolor: '#2980b9',
                                                        },
                                                    }}
                                                />
                                            ))}
                                        </Stack>
                                    </CardContent>
                                    <CardActions sx={{ p: 2, pt: 0 }}>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            startIcon={<LaunchIcon />}
                                            fullWidth
                                            href={project.liveDemo}
                                            target="_blank"
                                            sx={{
                                                mr: 1,
                                                bgcolor: '#3498db',
                                                '&:hover': {
                                                    bgcolor: '#2980b9',
                                                },
                                            }}
                                        >
                                            Live Demo
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            startIcon={<GitHubIcon />}
                                            fullWidth
                                            href={project.sourceCode}
                                            target="_blank"
                                            sx={{
                                                color: '#3498db',
                                                borderColor: '#3498db',
                                                '&:hover': {
                                                    borderColor: '#2980b9',
                                                    bgcolor: 'rgba(52, 152, 219, 0.1)',
                                                },
                                            }}
                                        >
                                            View Code
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
}; 