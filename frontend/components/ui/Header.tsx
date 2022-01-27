import React from 'react';
import Image from 'next/image';
import avatarImg from '../../assets/images/T02CTQY6K-U0179DFNBAL-89b3335c7df2-512.jpeg';

const Header = () => {
    return (
        <>
            <section className="py-5 px-6 bg-white shadow"><nav><div className="relative flex items-center">
                <div className="flex items-center mr-auto">
                    <button className="flex items-center">
                    <span className="flex justify-center items-center mr-3 w-10 h-10 bg-indigo-500 text-sm text-white rounded-full">
                    <Image 
                        src={avatarImg}
                        alt='Avatar Ivano'
                        width="50px"
                        height="50px"
                        className='rounded-full object-cover object-right'
                    />
                    </span>
                    <p className="text-sm font-medium mr-2">Game of Throne Characters</p>
                    <span className="inline-block -mb-px">
                    </span>
                    </button>
                </div>
                <div className="flex justify-end lg:hidden">
                    <button className="flex items-center">
                    <svg className="text-indigo-500 bg-indigo-100 block h-8 w-8 p-2 rounded" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Mobile menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg></button>
                </div>
                <div className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:w-auto lg:space-x-10">
                    <div className="hidden lg:flex items-center mr-auto pl-4 border rounded">
                    <button className="mr-2 text-gray-200 hover:text-gray-300">
                        <svg className="h-5 w-5" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7 19.3L17 15.6C20.1 11.7 19.5 6 15.6 2.9C11.7 -0.2 5.99999 0.5 2.89999 4.3C-0.200006 8.2 0.499995 13.9 4.29999 17C7.59999 19.6 12.3 19.6 15.6 17L19.3 20.7C19.7 21.1 20.3 21.1 20.7 20.7C21.1 20.3 21.1 19.7 20.7 19.3ZM9.99999 17C6.09999 17 2.99999 13.9 2.99999 10C2.99999 6.1 6.09999 3 9.99999 3C13.9 3 17 6.1 17 10C17 13.9 13.9 17 9.99999 17Z" fill="currentColor" /></svg></button>
                    <input className="pl-2 py-3 text-sm text-gray-200" type="text" placeholder="Búsqueda por casa o nombre" style={{width: "800px"}}/></div>
                </div>
                <ul className="hidden lg:flex lg:justify-end mr-6"><li className="mr-6">
                    <a className="text-gray-200 hover:text-gray-300" href="#">
                        <svg className="h-5 w-5" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" /></a>
                    </li>
                    <li>
                    <a className="text-gray-200 hover:text-gray-300" href="#">
                    </a>
                    </li>
                </ul>
                </div>
                </nav>
            </section>

        </>
    );
};

export default Header;