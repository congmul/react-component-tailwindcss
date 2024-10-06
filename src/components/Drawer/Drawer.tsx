import React from 'react';
import classNames from 'classnames';

export interface DrawerProps {
    /** React.ReactNode | string */
    children: React.ReactNode | string;
    className?: string;
    isOpen: boolean;
    close: () => void;
    /** 
     * React.ReactNode | string
     * If the title and subtitle are undefined, the header will not be displayed.
     */
    title?: React.ReactNode | string;
    /** React.ReactNode | string */
    subtitle?: React.ReactNode | string;
    closeOnMaskClick?: boolean;
    /** '25%' | '33%' | '50%' | '75%' | '100%' */
    size?: '25%' | '33%' | '50%' | '75%' | '100%';
    /** 'left' | 'right' | 'top' | 'bottom' */
    direction?: 'left' | 'right' | 'top' | 'bottom';
}

const Drawer:React.FC<DrawerProps> = ({children, className, isOpen = false, close, title, subtitle, closeOnMaskClick = true, size = '50%', direction = 'right'}) => {
    const xDirectionSize = {
        '25%': 'w-3/12 h-full',
        '33%': 'w-4/12 h-full',
        '50%': 'w-6/12 h-full',
        '66%': 'w-8/12 h-full',
        '75%': 'w-9/12 h-full',
        '100%': 'w-full h-full',
    }
    const yDirectionSize = {
        '25%': 'h-1/4 w-full',
        '33%': 'h-2/6 w-full',
        '50%': 'h-3/6 w-full',
        '66%': 'h-4/6 w-full',
        '75%': 'h-3/4 w-full',
        '100%': 'h-full w-full',
    }
    const drawSize = {
        left: {...xDirectionSize},
        right: {...xDirectionSize},
        top: {...yDirectionSize},
        bottom: {...yDirectionSize},
    }

    const directionClasses = {
        left: {
            true: 'translate-x-0',
            false: 'translate-x-[-100%]'
        },
        right: {
            true: 'translate-x-0',
            false: 'translate-x-full'
        },
        top: {
            true: 'translate-y-0',
            false: 'translate-y-[-100%]'
        },
        bottom: {
            true: 'translate-y-0',
            false: 'translate-y-full'
        },
    };
    
    const drawerClasses = {
        left: 'left-0',
        right: 'right-0',
        top: 'top-0',
        bottom: 'bottom-0',
      };
    const DrawerMaskClass = classNames(
        'rct-drawer-mask fixed inset-0 bg-black bg-opacity-50 transition-opacity',
         isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    );
    const DrawerClass = classNames(
        'rct-drawer fixed bg-white shadow-lg transform transition-transform duration-300 ease-in-out',        
        drawSize[direction][size],
        directionClasses[direction][`${isOpen}`],
        drawerClasses[direction],
        className
    );

    // Handle click on the mask
    const handleMaskClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if(!closeOnMaskClick) return;
        // Close the drawer only if the mask itself is clicked (not the drawer content)
        if (event.currentTarget === event.target) {
            close();
        }
    }
    return(
        <div className={DrawerMaskClass} onClick={handleMaskClick}>
            <div className={DrawerClass}>
                {
                    (title || subtitle) &&
                    <div className="rct-drawer-header p-4 border-b">
                        {
                            title &&
                            <div className={classNames(`rct-drawer-title w-11/12 text-lg font-bold`, subtitle && 'mb-2')}>{title}</div>
                        }
                        {
                            subtitle &&
                            <div className="rct-drawer-subtitle text-sm text-gray-700">{subtitle}</div>
                        }
                        <span
                            onClick={close}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                        >
                        &times;
                        </span>
                    </div>
                }
                <div className="rct-drawer-body p-4">{children}</div>
            </div>
        </div>
        )
}
export default Drawer;