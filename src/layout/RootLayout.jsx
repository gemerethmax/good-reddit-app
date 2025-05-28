import React from 'react';
import NavBar from '../navBar/NavBar';
import { Outlet } from 'react-router-dom';


export const RootLayout = () => {
    return (
        <div>
            <NavBar />
            <div class="w-full" >
                <Outlet />
            </div>
        </div>
    )
}