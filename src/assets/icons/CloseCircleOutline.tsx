import React from 'react';

type CloseCircleOutlineSVGProps = {
    /** 
     * default value 18px 
     * ex) 18px 
     * 
     * */
    width?: string 
    /**
     * ex) 18px
     */
    height?: string 
}
function CloseCircleOutlineSVG({ width = '18px', height }: CloseCircleOutlineSVGProps) {
    return(<>       
        <svg width={width} height={height ? height : width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    </>)
}

export default CloseCircleOutlineSVG;