import React from 'react';
import classNames from 'classnames';

export interface ModalProps {
    /** React.ReactNode | string */
    children: React.ReactNode | string;
    className?: string;
    isOpen: boolean;
    close: () => void;
}

const Modal:React.FC<ModalProps> = ({children, className, isOpen = false, close}) => {
    const ModalMaskClass = classNames(
        'rct-modal-mask fixed inset-0 bg-black bg-opacity-50 transition-opacity',
         isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    );

    const ModalClass = classNames(
        'rct-modal fixed inset-0 flex items-center justify-center z-50', 
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
                <div className="absolute inset-0 bg-gray-600 bg-opacity-50" onClick={close}></div>
                <div className="relative bg-white rounded-lg shadow-lg p-6 z-10 max-w-md w-full">
                    <button
                    onClick={close}
                    className="absolute top-0 right-0 mt-4 mr-4 text-gray-700"
                    >
                    &times;
                    </button>
                    {children}
                </div>
            </div>
        </div>
        )
}
export default Modal;