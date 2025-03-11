import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { Navbar } from '../components/Navbar';

const projects = [
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB.',
        image: 'https://cdn.dribbble.com/userupload/2512424/file/original-03f9f265c6c1a2676b3c30647c1b2fa3.png?compress=1&resize=1024x768',
        demoLink: '#',
        codeLink: '#'
    },
    {
        title: 'Task Management App',
        description: 'A responsive task management application with drag-and-drop functionality.',
        image: 'https://cdn.dribbble.com/userupload/3048850/file/original-6bc2c97710d4eb4740c2c99e3f911645.png?compress=1&resize=1024x768',
        demoLink: '#',
        codeLink: '#'
    },
    {
        title: 'Social Media Dashboard',
        description: 'A real-time social media analytics dashboard using React and Firebase.',
        image: 'https://cdn.dribbble.com/userupload/3048846/file/original-5f8c2c3c5c98d0bd6d067143f6a7d5a8.png?compress=1&resize=1024x768',
        demoLink: '#',
        codeLink: '#'
    },
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
                    pb: 6,
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        sx={{
                            color: '#2c3e50',
                            mb: 6,
                            fontWeight: 'bold',
                            textAlign: 'center'
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
                                        transition: 'transform 0.2s',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                                        }
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={project.image}
                                        alt={project.title}
                                        sx={{ objectFit: 'cover' }}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2" sx={{ color: '#2c3e50' }}>
                                            {project.title}
                                        </Typography>
                                        <Typography sx={{ color: '#7f8c8d' }}>
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ p: 2 }}>
                                        <Button 
                                            size="small" 
                                            href={project.demoLink}
                                            sx={{ 
                                                color: '#3498db',
                                                '&:hover': { color: '#2980b9' }
                                            }}
                                        >
                                            Live Demo
                                        </Button>
                                        <Button 
                                            size="small"
                                            href={project.codeLink}
                                            sx={{ 
                                                color: '#3498db',
                                                '&:hover': { color: '#2980b9' }
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