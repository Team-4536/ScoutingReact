import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './LandingPage';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import ConfigContext from './config.js';
import pageConfig from './config.json';

const Sections = () => {
    const config = React.useContext(ConfigContext);
    console.log(config);

    return (
        <Grid container spacing={2} sx={{ py: 1 }}>
            { config.sections.map((s) => <Grid key={s.name} xs={12} sm={6} lg={3}>
                                             <Box sx={{ height: '200px' }}>
                                                 <Typography sx={{ 'color': 'white', background: 'blue'}}
                                                             align={'center'}>{s.name}</Typography>
                                                 { s.fields.map((f) => <Typography align={'center'}>{f.title}</Typography>) }
                                             </Box>
                                         </Grid>) }
        </Grid>
    )
}

const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <LandingPage />,
        children: [
            {
                index: true,
                element: <Sections />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ConfigContext.Provider value={pageConfig}>
            <RouterProvider router={router} />
        </ConfigContext.Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
