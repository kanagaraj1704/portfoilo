import { Box, Container, Typography, Grid, Paper, TextField, Button } from '@mui/material';
import { Navbar } from '../components/Navbar';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const ContactPage = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission
        console.log('Form submitted');
    };

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
                        Contact Me
                    </Typography>
                    <Grid container spacing={4}>
                        {/* Contact Form */}
                        <Grid item xs={12} md={7}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    backgroundColor: 'white',
                                    borderRadius: 2,
                                }}
                            >
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Name"
                                                variant="outlined"
                                                required
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '&:hover fieldset': {
                                                            borderColor: '#3498db',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                variant="outlined"
                                                required
                                                type="email"
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '&:hover fieldset': {
                                                            borderColor: '#3498db',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Subject"
                                                variant="outlined"
                                                required
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '&:hover fieldset': {
                                                            borderColor: '#3498db',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Message"
                                                variant="outlined"
                                                required
                                                multiline
                                                rows={4}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '&:hover fieldset': {
                                                            borderColor: '#3498db',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                fullWidth
                                                sx={{
                                                    backgroundColor: '#3498db',
                                                    color: 'white',
                                                    '&:hover': {
                                                        backgroundColor: '#2980b9',
                                                    },
                                                }}
                                            >
                                                Send Message
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>

                        {/* Contact Information */}
                        <Grid item xs={12} md={5}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    backgroundColor: 'white',
                                    borderRadius: 2,
                                    height: '100%',
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: '#2c3e50',
                                        mb: 4,
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Get in Touch
                                </Typography>
                                <Box sx={{ mb: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <EmailIcon sx={{ color: '#3498db', mr: 2 }} />
                                        <Typography variant="body1" sx={{ color: '#7f8c8d' }}>
                                            your.email@example.com
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <LinkedInIcon sx={{ color: '#3498db', mr: 2 }} />
                                        <Typography variant="body1" sx={{ color: '#7f8c8d' }}>
                                            linkedin.com/in/yourusername
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <GitHubIcon sx={{ color: '#3498db', mr: 2 }} />
                                        <Typography variant="body1" sx={{ color: '#7f8c8d' }}>
                                            github.com/yourusername
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <LocationOnIcon sx={{ color: '#3498db', mr: 2 }} />
                                        <Typography variant="body1" sx={{ color: '#7f8c8d' }}>
                                            Your Location
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}; 