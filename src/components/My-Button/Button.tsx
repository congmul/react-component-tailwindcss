import React from 'react';

interface ButtonProps {
    children: React.ReactNode | string
}

const Button:React.FC<ButtonProps> = ({children}) => {
    return <button>{children}</button>
}

export default Button;