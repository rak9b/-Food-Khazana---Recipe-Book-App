import React from 'react';
import Footer from '../components/Nav+Footer/Footer';
import { Outlet } from 'react-router';
import Navbar from '../components/Nav+Footer/Navbar';

const HomeLayout = () => {
    return (
        <div className='pt-18'>
            <>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            </>
        </div>
    );
};

export default HomeLayout;