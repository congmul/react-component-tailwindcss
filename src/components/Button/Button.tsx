import React from 'react';
import classNames from 'classnames';
import Spinner from '../Spinner';

export interface ButtonProps {
    /** ReactNode | string */
    children: React.ReactNode | string;
    /** 'primary' | 'secondary' */
    variant?: 'primary' | 'secondary' | 'text';
    color?: 'sky' | 'red' | 'green' | 'amber' | 'pink';
    /** 'button' | 'submit' | 'reset' */
    type?: 'button' | 'submit' | 'reset';
    /** 'sm' | 'base' | 'lg' */
    size?: 'sm' | 'base' | 'lg';
    loading?: boolean;
    className?: string;
    rounded?: boolean;
    disabled?: boolean;
    /** Callback to invoke when the button is clicked */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button:React.FC<ButtonProps> = ({children = 'Button', variant = 'primary', color = 'sky',  size = 'base', loading=false, type = 'button', className, rounded = false, disabled = false, onClick, ...restProps}) => {
    const buttonStyles = {
        primary: 'text-white border',
        secondary: 'bg-white border',
        text: 'bg-white'
    }
    const buttonColor = {
        sky: {
            primary: `${buttonStyles[variant]} bg-sky-500 hover:bg-sky-400 border-sky-500`,
            secondary: `${buttonStyles[variant]} text-sky-500 hover:bg-sky-100 border-sky-500`,
            text: `${buttonStyles[variant]} text-sky-500 hover:bg-sky-100 border-sky-500`,
        },
        red: {
            primary: `${buttonStyles[variant]} bg-red-500 hover:bg-red-400 border-red-500`,
            secondary: `${buttonStyles[variant]} text-red-500 hover:bg-red-100 border-red-500`,
            text: `${buttonStyles[variant]} text-red-500 hover:bg-red-100 border-red-500`,
        },
        green: {
            primary: `${buttonStyles[variant]} bg-green-500 hover:bg-green-400 border-green-500`,
            secondary: `${buttonStyles[variant]} text-green-500 hover:bg-green-100 border-green-500`,
            text: `${buttonStyles[variant]} text-green-500 hover:bg-green-100 border-green-500`,
        },
        amber: {
            primary: `${buttonStyles[variant]} bg-amber-500 hover:bg-amber-400 border-amber-500`,
            secondary: `${buttonStyles[variant]} text-amber-500 hover:bg-amber-100 border-amber-500`,
            text: `${buttonStyles[variant]} text-amber-500 hover:bg-amber-100 border-amber-500`,
        },
        pink: {
            primary: `${buttonStyles[variant]} bg-red-300 hover:bg-red-400 border-red-300`,
            secondary: `${buttonStyles[variant]} text-red-300 hover:bg-red-50 border-red-300`,
            text: `${buttonStyles[variant]} text-red-300 hover:bg-red-50 border-red-300`,
        },
    }
    const buttonSize = {
        sm: "h-8 py-1 px-5 text-sm",
        base: "h-10 py-2 px-6 text-base",
        lg: "h-12 py-2 px-7 text-lg",
    }
    const spinnerSize = {
        sm: "h-3",
        base: "h-4",
        lg: "h-5",
    }
    const disabledType = {
        sky: {
            primary: `disabled:cursor-not-allowed disabled:bg-sky-300 disabled:border-sky-300`,
            secondary: `disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-sky-300 disabled:border-sky-300`,
            text: `disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-sky-300`,
        },
        red: {
            primary: `disabled:cursor-not-allowed disabled:bg-red-300 disabled:border-red-300`,
            secondary: `disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-red-300 disabled:border-red-300`,
            text: `disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-red-300`,
        },
        green: {
            primary: `disabled:cursor-not-allowed disabled:bg-green-300 disabled:border-green-300`,
            secondary: `disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-green-300 disabled:border-green-300`,
            text: `disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-green-300`,
        },
        amber: {
            primary: `disabled:cursor-not-allowed disabled:bg-amber-300 disabled:border-amber-300`,
            secondary: `disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-amber-300 disabled:border-amber-300`,
            text: `disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-amber-300`,
        },
        pink: {
            primary: `disabled:cursor-not-allowed disabled:bg-red-100 disabled:border-red-100`,
            secondary: `disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-red-100 disabled:border-red-100`,
            text: `disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-red-100`,
        },
    }
    const buttonClass = classNames(
        'relative',
        buttonSize[size],
        rounded ? 'rounded-3xl' : 'rounded',
        buttonColor[color][variant],
        disabledType[color][variant],
        className,
    );
    return <button 
            className={buttonClass}
            role={type}
            type={type}
            onClick={onClick}
            disabled={disabled}
            {...restProps}
        >{
            <>
                {loading && <span className="flex justify-center items-center w-full">
                    <Spinner size={spinnerSize[size] as any} color={variant === 'primary' ? 'white' : color}/>
                </span>}
                <div className={loading ? 'invisible h-0' : ''}>{children}</div>
            </> 
        }</button>
}

export default Button;