import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import  Navbar  from "../Users/components/navbar/Navbar";
import { Home } from '../Users/screens/home/Home'
import { About } from '../Users/screens/about/About'
import { Contact } from '../Users/screens/contact/Contact'
import { Footer } from "../Users/components/Footer/Footer";
import { Services } from "../Users/screens/Services/Services";
import { MarketingServices } from "../Users/screens/MarketingServices/MarketingServices";
import { ConsumerServices } from "../Users/screens/ConsumerServices/ConsumerServices";
import { CorporateServices } from "../Users/screens/CorporateServices/CorporateServices";
import {Admin} from '../Admin/Admin'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/aboutus',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/services',
                element: <Services />,
            },
            // {
            //     path: '/careers',
            //     element: <Careers />,
            // },
            {
                path: '/marketing-services',
                element: <MarketingServices />,
            },
            {
                path: '/consumer-services',
                element: <ConsumerServices />,
            },
            {
                path: '/corporate-services',
                element: <CorporateServices />,
            },
            {
                path: '/admin',
                element: <Admin />,
            },
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>

    )
}
export default Router