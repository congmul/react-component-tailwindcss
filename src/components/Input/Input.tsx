import React, { useState } from 'react';
import classNames from 'classnames';
import { EyeSVG } from '../../assets';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {    
    defaultValue?: string;
    placeholder?: string
    type?: "email" | "password" | "text" | 'number'
    className?: string;
    onChange: (value: string, type: string) => void
}

const Input:React.FC<InputProps> = ({ className, type = 'text', defaultValue = '', placeholder = '', onChange, ...restProps}) => {
    const [value, setValue] = useState(() => defaultValue);
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const InputWrapperClass = classNames(
        'rct-input-wrapper relative min-w-48 px-[15px] pt-[25px] pb-[8px] h-[60px] border rounded-md shadow-sm',
        { 'ring ring-red-300 ring-opacity-50' : focused },
        className
    );
    const InputClass = classNames(
        'relative block w-[100%] h-[22] focus-visible:outline-none hover:cursor-pointer -internal-autofill-selected:none'
    );
    const LabelClass = classNames(
        'absolute left-3 transition-all duration-300 text-gray-400 pointer-events-none',
        { 'top-2 left-4 text-[10px]' : focused || value.length > 0 },
        { 'top-4 text-[16px]' : !focused && value.length === 0 }
    )

    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);
    const handleChange = (e:any) => {
        setValue(e.target.value);
        onChange(e.target.value, e.target.type);
    };
    return(
        <div className={InputWrapperClass}>
            <input 
                className={InputClass}
                type={type === "password" && showPassword ? 'text' : type}
                value={value}
                {...restProps}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            <label className={LabelClass}>
                {placeholder}
            </label>
        </div>
        )
}
export default Input;