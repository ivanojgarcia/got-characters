import React from 'react';
import Header from './ui/Header';

const Layout = props => {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
        </>
    );
};

export default Layout;