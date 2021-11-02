import React from 'react';

import './custom-button.scss';

const CustomButton = ({children, isGoogleSignin, ...otherProps }) => (
        <button className={`${isGoogleSignin ? 'google-signin' : ''} custom-button`} {...otherProps}>
            {children}
        </button>  
    );

export default CustomButton;