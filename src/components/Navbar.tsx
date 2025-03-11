import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Button,
    MenuItem,
    Fade,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const pages = ['Home', 'Projects', 'About', 'Contact'];

export const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleNavigate = (page: string) => {
        handleCloseNavMenu();
        const path = page === 'Home' ? '/' : `/${page.toLowerCase()}`;
        navigate(path);
    };

    const isActive = (page: string) => {
        const path = page === 'Home' ? '/' : `/${page.toLowerCase()}`;
        return location.pathname === path;
    };

    return (
        <AppBar 
            position="fixed" 
            sx={{ 
                background: scrolled ? '#2c3e50' : 'rgba(44, 62, 80, 0.95)',
                backdropFilter: 'blur(8px)',
                boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.3s ease-in-out',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    {/* Desktop Logo */}
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            color: '#ffffff',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease',
                            '&:hover': {
                                color: '#3498db',
                            }
                        }}
                        onClick={() => navigate('/')}
                    >
                        Portfolio
                    </Typography>

                    {/* Mobile Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{ color: '#ffffff' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            TransitionComponent={Fade}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                '& .MuiPaper-root': {
                                    backgroundColor: 'rgba(44, 62, 80, 0.95)',
                                    backdropFilter: 'blur(8px)',
                                    marginTop: '0.5rem',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem 
                                    key={page} 
                                    onClick={() => handleNavigate(page)}
                                    sx={{
                                        backgroundColor: isActive(page) ? 'rgba(52, 152, 219, 0.1)' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'rgba(52, 152, 219, 0.2)',
                                        },
                                    }}
                                >
                                    <Typography 
                                        textAlign="center"
                                        sx={{ 
                                            color: isActive(page) ? '#3498db' : '#ffffff',
                                            fontWeight: isActive(page) ? 600 : 400,
                                        }}
                                    >
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Mobile Logo */}
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            color: '#ffffff',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease',
                            '&:hover': {
                                color: '#3498db',
                            }
                        }}
                        onClick={() => navigate('/')}
                    >
                        Portfolio
                    </Typography>

                    {/* Desktop Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleNavigate(page)}
                                sx={{
                                    my: 2,
                                    mx: 1,
                                    color: isActive(page) ? '#3498db' : '#ffffff',
                                    display: 'block',
                                    position: 'relative',
                                    fontWeight: isActive(page) ? 600 : 400,
                                    '&:hover': {
                                        color: '#3498db',
                                        backgroundColor: 'transparent',
                                    },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        width: isActive(page) ? '100%' : '0%',
                                        height: '2px',
                                        bottom: '5px',
                                        left: '0',
                                        backgroundColor: '#3498db',
                                        transition: 'width 0.3s ease',
                                    },
                                    '&:hover::after': {
                                        width: '100%',
                                    },
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}; 