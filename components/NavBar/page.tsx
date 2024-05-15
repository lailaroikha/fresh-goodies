import React from 'react';

interface NavBarProps {
    withFilter?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({withFilter}) => {
    return (
        <nav className='flex w-full items-end justify-between md:flex-row px-4 py-4 md:justify-between' >
            <div>
                <h1 className='font-semibold text-xl font-sf-pro-display text-left  leading-6 tracking-tighter'>Vegetables</h1>  
            </div>
            <div className='flex gap-20'>
                <button >
                    <img src='/Filter.png'  />
                </button>
            </div>
            <div className='flex gap-8'>
                <button >
                    <img src='/IconR.png' />
                </button>
            </div>
       </nav>
    );
};

export default NavBar;