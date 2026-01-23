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
import MentorsPage from './pages/MentorsPage';
import NoPage from './pages/NoPage';
import { CoursesProvider } from './contexts/CourseContext';
import CourseDetailPage from './pages/CourseDetailPage';
import { MentorProvider } from './contexts/MentorContext';
import BookedSessionPage from './pages/BookedSessionPage';


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
          path: "courses",
          children: [
            {
              index: true,
              element: <CoursesPage />,
            },
            {
              path: ":id",
              element: <CourseDetailPage />,
            },
          ],
        },
        {
          path: "/mentors",
          element: <MentorsPage />,
        },
        {
          path: "/bookedsession",
          element: <BookedSessionPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NoPage />,
    },
  ]);

  return (
    <AuthProvider>

      <MentorProvider>
        <CoursesProvider>

          <RouterProvider router={router} />
        </CoursesProvider>
      </MentorProvider>
    </AuthProvider>
  );
}
