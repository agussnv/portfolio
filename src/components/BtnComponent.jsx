'use client'

function BtnComponent({ children, className = "", onClick, ...props }) {
    return (
        <button
            {...props}
            onClick={onClick}
            className={`${className}`}
        >
            {children}
        </button>
    );
}

export default BtnComponent;
