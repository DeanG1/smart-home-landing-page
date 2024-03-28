import React from 'react'

const Button = ({className, href, onClick, children, px}) => {

    const classes = `button relative inline-flex items-center justify-center h-11 transition-color hover:text-color-1 ${
        px || "px-7"
      }`;
    
    const spanClasses = 'relative z-10'
    const renderButton = () => (
        <button onClick={onClick} className={classes}>
            <span className={spanClasses}>{children}</span>
        </button>
    );
    const renderLink = () => (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
        </a>
    );
    return href ? renderLink() : renderButton();
 
};

export default Button