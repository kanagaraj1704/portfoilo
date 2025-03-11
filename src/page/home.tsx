import {
    Box,
    Button,
    Container,
    Typography,
    Stack,
    IconButton,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const HomePage = () => {     
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <Box
                sx={{
                    background: '#ecf0f1',
                    minHeight: '100vh',
                    color: '#2c3e50',
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            pt: { xs: 15, md: 25 },
                            pb: { xs: 10, md: 20 },
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            gap: 4,
                        }}
                    >
                        {/* Hero Content */}
                        <Box 
                            sx={{ 
                                flex: 1,
                                textAlign: { xs: 'center', md: 'left' }
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 2,
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    color: '#2c3e50',
                                }}
                            >
                                React Developer
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#3498db',
                                    mb: 3,
                                    fontWeight: 500,
                                }}
                            >
                                Turning Ideas into Reality with React
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 4,
                                    fontSize: '1.1rem',
                                    color: '#7f8c8d',
                                }}
                            >
                                With 2 years of experience in React development, I specialize in
                                building responsive, performant, and user-friendly web applications.
                                Passionate about clean code and modern web technologies.
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={2}
                                sx={{
                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                    mb: 4,
                                }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={() => navigate('/projects')}
                                    sx={{
                                        backgroundColor: '#3498db',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#2980b9',
                                        },
                                    }}
                                >
                                    View Projects
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    onClick={() => navigate('/contact')}
                                    sx={{
                                        borderColor: '#3498db',
                                        color: '#3498db',
                                        '&:hover': {
                                            borderColor: '#2980b9',
                                            backgroundColor: 'rgba(52, 152, 219, 0.1)',
                                        },
                                    }}
                                >
                                    Contact Me
                                </Button>
                            </Stack>
                            <Stack
                                direction="row"
                                spacing={2}
                                sx={{
                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                }}
                            >
                                <IconButton
                                    aria-label="github"
                                    sx={{ 
                                        color: '#2c3e50',
                                        '&:hover': {
                                            color: '#3498db',
                                        }
                                    }}
                                    onClick={() => window.open('https://github.com/yourusername')}
                                >
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="linkedin"
                                    sx={{ 
                                        color: '#2c3e50',
                                        '&:hover': {
                                            color: '#3498db',
                                        }
                                    }}
                                    onClick={() => window.open('https://linkedin.com/in/yourusername')}
                                >
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="email"
                                    sx={{ 
                                        color: '#2c3e50',
                                        '&:hover': {
                                            color: '#3498db',
                                        }
                                    }}
                                    onClick={() => window.location.href = 'mailto:your.email@example.com'}
                                >
                                    <EmailIcon />
                                </IconButton>
                            </Stack>
                        </Box>

                        {/* Hero Image */}
                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                component="img"
                                src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454633-2918522.png"
                                alt="Developer Illustration"
                                sx={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    height: 'auto',
                                    animation: 'float 3s ease-in-out infinite',
                                    '@keyframes float': {
                                        '0%': {
                                            transform: 'translateY(0px)',
                                        },
                                        '50%': {
                                            transform: 'translateY(-20px)',
                                        },
                                        '100%': {
                                            transform: 'translateY(0px)',
                                        },
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}; 