import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Pages
import About from './Pages/About';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Packages from './Pages/Packages';
import Contact from './Pages/Contact';
import Destination from './Pages/Destination';
import Booking from './Pages/Booking';
import Team from './Pages/Team';
import Testimonial from './Pages/Testimonial';
import Pages404 from './Pages/Page404';
import Details from './Pages/Details';
// Destination
import Thailand from './Pages/Thailand';
import England from './Pages/England';
import Malaysia from './Pages/Malaysia';
import Australia from './Pages/Australia';
import Indonesia from './Pages/Indonesia';
import Vietnam from './Pages/Vietnam';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/packages',
        element: <Packages />,
      },
      {
        path: '/destination',
        element: <Destination />,
      },
      {
        path: '/booking',
        element: <Booking />,
      },
      {
        path: '/team',
        element: <Team />,
      },
      {
        path: '/testimonial',
        element: <Testimonial />,
      },
      {
        path: '/404',
        element: <Pages404 />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/details',
        element: <Details />,
      },
      {
        path: '/thailand',
        element: <Thailand />,
      },
      {
        path: '/england',
        element: <England />,
      },
      {
        path: '/malaysia',
        element: <Malaysia />,
      },
      {
        path: '/australia',
        element: <Australia />,
      },
      {
        path: '/indonesia',
        element: <Indonesia />,
      },
      {
        path: '/vietnam',
        element: <Vietnam />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
