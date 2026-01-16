import './App.css';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Navigation from './pages/Navigation';
import { AuthProvider } from './contexts/AuthContext';
import authMiddleware from './middleware/authMiddleWare';
import Layout from './pages/Layout';
import DashboardPage from './pages/DashboardPage';
import CoursesPage from './pages/CoursesPage';


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegistrationPage />,
    },
    {
      path: "/",
      element: <Layout />,
      middleware: [authMiddleware],
      children: [
        {
          index: true,
          element: <Navigate to="/dashboard" replace />,
        },
        {
          path: "/dashboard",
          element: <DashboardPage />,
        },
        {
          path: "/courses",
          element: <CoursesPage />,
        },
/*         {
          path: "/mentors",
          element: <MentorsPage />,
        }, */
      ],
    },
/*     {
      path: "*",
      element: <NoPage />,
    }, */
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
