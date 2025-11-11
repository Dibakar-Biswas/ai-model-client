import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
            <div className="mx-auto sticky top-0 h-fit z-50"><Navbar></Navbar></div>
            <div className='max-w-screen mx-auto'>
                
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