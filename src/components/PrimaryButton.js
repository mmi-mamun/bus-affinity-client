import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-amber-800 to-rose-600 text-white">{children}</button>
    );
};

export default PrimaryButton;