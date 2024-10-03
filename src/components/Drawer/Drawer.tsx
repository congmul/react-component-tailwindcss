import React from 'react';
import classNames from 'classnames';

export interface DrawerProps {
}

const Drawer:React.FC<DrawerProps> = ({}) => {
    const DrawerClass = classNames(
        'Drawer'
    );
    return(
        <div className={DrawerClass}>
            Drawer
        </div>)
}
export default Drawer;