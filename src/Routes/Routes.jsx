import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/Job/JobDetails";
import AddJob from "../pages/Job/AddJob";
import ErrorPage from "../pages/Error/ErrorPage";
import MyPostedJobs from "../pages/Job/MyPostedJobs";
import UpdateJob from "../pages/Job/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/Bid/MyBids";
import AllJobs from "../pages/Job/AllJob";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/add-job',
                element: <PrivateRoute>
                    <AddJob/>
                </PrivateRoute>
            },
            {
                path: '/job/:id',
                element: <PrivateRoute>
                    <JobDetails/>
                </PrivateRoute>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/my-posted-jobs',
                element: <PrivateRoute>
                <MyPostedJobs/>
            </PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute>
                    <UpdateJob/>
                </PrivateRoute>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/my-bids',
                element: <PrivateRoute>
                    <MyBids/>
                </PrivateRoute>,
               
            },
            {
                path: '/all-job',
                element: <AllJobs/>
,
               
            }
        ]
    }
]);

export default router