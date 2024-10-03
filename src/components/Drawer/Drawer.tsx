import React from 'react';
import classNames from 'classnames';

export interface DrawerProps {
    children: React.ReactNode | string;
    isOpen: boolean
}

const Drawer:React.FC<DrawerProps> = ({children, isOpen = false}) => {
    const DrawerClass = classNames(
        // 'fixed transition-transform transform z-10 inset-y-0 left-0',
        'fixed top-0 left-0 h-full bg-gray-800 text-white transform transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full'
    );
    return(
        <div className={DrawerClass} style={{ width: '250px' }}>
            {children}
        </div>)
}
export default Drawer;