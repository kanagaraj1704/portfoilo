import { AppProvider } from "./context/context"
import { LoginPage } from "./page/login"
import { HomePage } from "./page/home"
import { ProjectsPage } from "./page/projects"
import { AboutPage } from "./page/about"
import { ContactPage } from "./page/contact"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
