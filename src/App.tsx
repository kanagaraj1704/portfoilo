import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './page/home';
import { ProjectsPage } from './page/projects';
import { AboutPage } from './page/about';
import { ContactPage } from './page/contact';
import { LoginPage } from './page/login';
import { AuthProvider } from './context/context';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
