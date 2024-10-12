import React from 'react';
import classNames from 'classnames';

export interface InputProps {
    /** React.ReactNode | string */
    children: React.ReactNode | string;
    className?: string;
}

const Input:React.FC<InputProps> = ({children, className}) => {
    const InputClass = classNames(
        'rct-input',
        className
    );
    return(
        <div className={InputClass}>
            {children}
        </div>
        )
}
export default Input;