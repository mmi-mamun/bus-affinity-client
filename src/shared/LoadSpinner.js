import React from 'react';

const LoadSpinner = () => {
    return (
        // <div className="flex justify-center items-center">
        //     <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
        //         <span className="visually-hidden">Loading...</span>
        //     </div>
        // </div>

        <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 p-6 my-12" role="status">
                {/* <span className="visually-hidden">Loading...</span> */}
            </div>
        </div>
    );
};

export default LoadSpinner;