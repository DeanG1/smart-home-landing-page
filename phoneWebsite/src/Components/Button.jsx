import React from 'react'

const Button = ({className, href, onClick, children,}) => {

    const classesButton = "button px-9 font-semibold rounded-lg py-3 relative inline-flex items-center justify-center";
    const classesHref = "button bg-indigo-500 text-white px-4 py-2 relative inline-flex items-center justify-center";
    const spanClasses = 'relative z-10'
    const renderButton = () => (
        <button onClick={onClick} className={classesButton}>
            <span className={spanClasses}>{children}</span>
        </button>
    );
  
    const renderLink = () => (
        <a href={href} className={classesHref}>
            <span className={spanClasses}>{children}</span>
        </a>
    );
    return href ? renderLink() : renderButton();
 
};

export default Button