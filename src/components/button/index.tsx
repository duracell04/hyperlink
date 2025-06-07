import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export interface ButtonProps {
    title: string;
    path: string;
    onClick?: () => void;
    addclass?: string;
}

function Button({ title, path, onClick, addclass }: ButtonProps) {
    return (
        <Link className={`tf-button ${addclass}`} to={path} onClick={onClick}>
            {title}
        </Link>
    );
}

export default Button;
