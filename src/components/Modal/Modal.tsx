import React from 'react';
import classNames from 'classnames';

export interface ModalProps {
    /** React.ReactNode | string */
    children: React.ReactNode | string;
    className?: string;
    isOpen: boolean;
    close: () => void;
    title?: string
}

const Modal:React.FC<ModalProps> = ({children, className, isOpen = false, close, title = 'Title'}) => {
    const ModalMaskClass = classNames(
        'rct-modal-mask fixed inset-0 bg-black bg-opacity-50 transition-opacity flex items-center justify-center',
         isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    );

    const ModalClass = classNames(
        'rct-modal', 
        'relative bg-white rounded-lg shadow-lg z-10 max-w-md min-w-80',
        className
    );

    // Handle click on the mask
    const handleMaskClick = (event: React.MouseEvent<HTMLDivElement>) => {
        // Close the drawer only if the mask itself is clicked (not the drawer content)
        if (event.currentTarget === event.target) {
            close();
        }
    }
    return(
        <div className={ModalMaskClass} onClick={handleMaskClick}>
            <div className={ModalClass}>
                <div className="rct-modal-header p-4 border-b">
                    <div className="rct-modal-title w-11/12 text-lg font-bold">{title}</div>
                    <button
                        onClick={close}
                        className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                    >
                    &times;
                    </button>
                </div>
                <div className="rct-modal-body p-4 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
        )
}
export default Modal;