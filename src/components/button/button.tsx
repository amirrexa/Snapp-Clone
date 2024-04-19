import React from 'react';
import './button.scss';

type ButtonType = 'primary' | 'outlined' | 'logout';

interface ButtonProps {
    type: ButtonType;
    icon?: React.ReactNode;
    text?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, icon, text, onClick }) => {
    const className = `sc-button ${type}`;

    return (
        <button className={className} onClick={onClick && onClick}>
            {icon && <span className="icon">{icon}</span>}
            {text}
        </button>
    );
};

export default Button;
