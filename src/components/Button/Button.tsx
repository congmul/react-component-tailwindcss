import React from 'react';
import classNames from 'classnames';

export interface ButtonProps {
    /** ReactNode | string */
    children: React.ReactNode | string;
    /** 'primary' | 'secondary' */
    variant?: 'primary' | 'secondary';
    /** 'button' | 'submit' | 'reset' */
    type?: 'button' | 'submit' | 'reset';
    /** 'sm' | 'base' | 'lg' */
    size?: 'sm' | 'base' | 'lg';
    className?: string;
    rounded?: boolean;
    disabled?: boolean;
    /** Callback to invoke when the button is clicked */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button:React.FC<ButtonProps> = ({children = 'Button', variant = 'primary', size = 'base', type = 'button', className, rounded = false, disabled = false, onClick, ...restProps}) => {
    const buttonStyles = {
        primary: "bg-sky-500 text-white hover:bg-sky-400 border border-sky-500",
        secondary: "bg-white text-sky-500 hover:bg-sky-100 border border-sky-500",
    }
    const buttonSize = {
        sm: "py-2 px-5 text-sm",
        base: "py-2 px-6 text-base",
        lg: "py-2 px-7 text-lg"
    }
    const disabledType = {
        primary: 'disabled:cursor-not-allowed disabled:bg-sky-300 disabled:border-sky-300',
        secondary: 'disabled:cursor-not-allowed disabled:bg-white disabled:text-sky-300 disabled:border-sky-300',
    }
    const buttonClass = classNames(
        buttonSize[size],
        rounded ? 'rounded-3xl' : 'rounded',
        buttonStyles[variant],
        disabledType[variant],
        className
    );
    return <button 
            className={buttonClass}
            role={type}
            type={type}
            onClick={onClick}
            disabled={disabled}
            {...restProps}
        >{children}</button>
}

export default Button;