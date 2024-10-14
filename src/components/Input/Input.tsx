import React, { useState } from 'react';
import classNames from 'classnames';
import { EyeOulineSVG, EyeHideOutlineSVG, CloseCircleOutlineSVGProps } from '../../assets';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {    
    defaultValue?: string;
    placeholder?: string;
    /** "email" | "password" | "text" | 'number */
    type?: "email" | "password" | "text" | 'number'; 
    /** 'sm' | 'base' | 'lg' */
    inputSize?: 'sm' | 'base' | 'lg';
    /**
     * Default color is 'sky'
     */
    color?: 'sky' | 'red' | 'green' | 'amber' | 'pink';
    className?: string;
    onChange: (value: string, type: string) => void
}

const Input:React.FC<InputProps> = ({ className, type = 'text', color = 'sky', inputSize='base', defaultValue = '', placeholder = '', onChange, ...restProps}) => {
    const [value, setValue] = useState(() => defaultValue);
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const ringColor:Record<'sky' | 'red' | 'green' | 'amber' | 'pink', string> = {
        'sky': 'ring-sky-300',
        'red': 'ring-red-300',
        'green': 'ring-green-300',
        'amber': 'ring-amber-300',
        'pink': 'ring-pink-300'
    }
    const inputSizeSelector = {
        'sm': {
            inputWrapper: 'h-[36px] px-[10px] pt-[12px] pb-[2px]',
            input: 'text-[14px]',
            label: {
                fucused: 'top-[0.1rem] left-3 text-[8px]',
                unfocused: 'top-[0.4rem] left-[0.55rem] text-[12px]',
            }
        },
        'base': {
            inputWrapper: 'h-[48px] px-[15px] pt-[18px] pb-[5px]',
            input: 'text-[16px]',
            label: {
                fucused: 'top-[0.4rem] left-4 text-[10px]',
                unfocused: 'top-[0.65rem] left-[0.90] text-[16px]',
            }
        },
        'lg': {
            inputWrapper: 'h-[60px] px-[15px] pt-[25px] pb-[8px]',
            input: 'text-[20px]',
            label: {
                fucused: 'top-2 left-4 text-[12px]',
                unfocused: 'top-4 left-3 text-[16px]',
            }
        },
    }
    const InputWrapperClass = classNames(
        'rct-input-wrapper relative min-w-48 border rounded-md shadow-sm',        
        { 'ring ring-opacity-50' : focused },
        ringColor[color || 'sky'],
        inputSizeSelector[inputSize].inputWrapper,
        className
    );
    const InputClass = classNames(
        'relative block focus-visible:outline-none hover:cursor-pointer -internal-autofill-selected:none',
        inputSizeSelector[inputSize].input
    );
    const LabelClass = classNames(
        'absolute transition-all duration-300 text-gray-400 pointer-events-none',
        `${ focused || value.length > 0  ? inputSizeSelector[inputSize].label.fucused : inputSizeSelector[inputSize].label.unfocused}`        
    )

    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);
    const handleChange = (e:any) => {
        setValue(e.target.value);
        onChange(e.target.value, e.target.type);
    };
    const handleClear = () => {
        setValue('')
        setFocused(false);
    };
    return(
        <div className={InputWrapperClass}>
            <input 
                className={InputClass}
                type={type === "password" && showPassword ? 'text' : type}
                style={{width: type === "password" ? 'calc(100% - 48px)' : 'calc(100% - 24px)'}}
                value={value}
                {...restProps}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            <label className={LabelClass}>
                {placeholder}
            </label>
            {value && type === "password" && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={classNames("absolute right-9 top-2/4 transform -translate-y-2/4 text-gray-400 hover:text-gray-700", 
                        {"right-3": type !== 'password'}
                )}>
                    {showPassword ? <EyeOulineSVG width="22px" /> : <EyeHideOutlineSVG width="21px" />}
                </button>)
            }
            {value && (
                <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-400 hover:text-gray-700"
                >
                <CloseCircleOutlineSVGProps width="16px" />
                </button>
            )}
        </div>
        )
}
export default Input;