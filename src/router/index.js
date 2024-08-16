import { createBrowserRouter } from "react-router-dom";
import AboutUS from "../pages/AboutUS";
import HomePage from "../pages/Home";
import PortfolioPage from "../pages/Portfolio";
import ContactUS from "../pages/ContactUS";
import ErrorPage from "../pages/ErrorPage";
import MainLyoutRouter from "../MainLyoutRouter";

export const router = createBrowserRouter([
    {
        path:'',
        element: <MainLyoutRouter />,
        errorElement: <ErrorPage />,
        children:[
            {
                path:'/',
                element: <HomePage />
            },
            {
                path:'/portfolio',
                element: <PortfolioPage />
            },
            {
                path:'/about',
                element: <AboutUS />
            },
            {
                path:'/contact',
                element: <ContactUS />
            }
        ]
    }
])