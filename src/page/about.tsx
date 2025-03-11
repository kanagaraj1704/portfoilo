import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { Navbar } from '../components/Navbar';

const skills = [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'HTML/CSS', level: 88 },
    { name: 'Node.js', level: 75 },
    { name: 'Material-UI', level: 85 },
    { name: 'Redux', level: 80 },
];

const experiences = [
    {
        role: 'Frontend Developer',
        company: 'Tech Solutions Inc.',
        period: '2022 - Present',
        description: 'Developing and maintaining responsive web applications using React.js and modern frontend technologies.'
    },
    {
        role: 'Junior Web Developer',
        company: 'Digital Innovations',
        period: '2021 - 2022',
        description: 'Started career as a web developer, working on various client projects and learning modern web development practices.'
    }
];

export const AboutPage = () => {
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
                    <Grid container spacing={4}>
                        {/* About Me Section */}
                        <Grid item xs={12}>
                            <Typography
                                variant="h3"
                                sx={{
                                    color: '#2c3e50',
                                    mb: 4,
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}
                            >
                                About Me
                            </Typography>
                            <Paper 
                                elevation={0}
                                sx={{ 
                                    p: 4, 
                                    mb: 4, 
                                    backgroundColor: 'white',
                                    borderRadius: 2
                                }}
                            >
                                <Typography variant="body1" sx={{ color: '#7f8c8d', lineHeight: 1.8 }}>
                                    I am a passionate React Developer with 2 years of experience in building modern web applications. 
                                    My journey in web development started with a strong foundation in HTML, CSS, and JavaScript, 
                                    and has evolved into expertise in React.js and its ecosystem. I love creating responsive, 
                                    user-friendly interfaces and solving complex problems through clean, efficient code.
                                </Typography>
                            </Paper>
                        </Grid>

                        {/* Skills Section */}
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h4"
                                sx={{
                                    color: '#2c3e50',
                                    mb: 3,
                                    fontWeight: 'bold'
                                }}
                            >
                                Skills
                            </Typography>
                            <Paper 
                                elevation={0}
                                sx={{ 
                                    p: 3,
                                    backgroundColor: 'white',
                                    borderRadius: 2
                                }}
                            >
                                {skills.map((skill, index) => (
                                    <Box key={index} sx={{ mb: 2 }}>
                                        <Typography variant="subtitle1" sx={{ color: '#2c3e50', mb: 1 }}>
                                            {skill.name}
                                        </Typography>
                                        <LinearProgress
                                            variant="determinate"
                                            value={skill.level}
                                            sx={{
                                                height: 8,
                                                borderRadius: 4,
                                                backgroundColor: '#ecf0f1',
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: '#3498db',
                                                    borderRadius: 4,
                                                }
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Paper>
                        </Grid>

                        {/* Experience Section */}
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h4"
                                sx={{
                                    color: '#2c3e50',
                                    mb: 3,
                                    fontWeight: 'bold'
                                }}
                            >
                                Experience
                            </Typography>
                            <Paper 
                                elevation={0}
                                sx={{ 
                                    p: 3,
                                    backgroundColor: 'white',
                                    borderRadius: 2
                                }}
                            >
                                {experiences.map((exp, index) => (
                                    <Box 
                                        key={index} 
                                        sx={{ 
                                            mb: 3,
                                            '&:last-child': { mb: 0 }
                                        }}
                                    >
                                        <Typography 
                                            variant="h6" 
                                            sx={{ 
                                                color: '#2c3e50',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            {exp.role}
                                        </Typography>
                                        <Typography 
                                            variant="subtitle1" 
                                            sx={{ 
                                                color: '#3498db',
                                                mb: 1
                                            }}
                                        >
                                            {exp.company} | {exp.period}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                                            {exp.description}
                                        </Typography>
                                    </Box>
                                ))}
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}; 