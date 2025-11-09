import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
            <div className='max-w-9xl mx-auto'>
                <Navbar></Navbar>
                <div className='mt-4'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;