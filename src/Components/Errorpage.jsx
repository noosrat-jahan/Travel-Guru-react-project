import React from 'react';
import { FaHome } from 'react-icons/fa';

const Errorpage = () => {
    return (
        <div>
            <div className="flex items-center justify-center py-20 bg-gray-100">
                <div className="text-center">
                    {/* Error Code */}
                    <h1 className="text-6xl font-bold text-red-500">404</h1>
                    {/* Error Message */}
                    <p className="mt-4 text-2xl font-semibold text-gray-800">
                        Oops! Page not found.
                    </p>
                    <p className="mt-2 text-gray-600">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    {/* Home Button */}
                    <button
                        onClick={() => window.location.href = '/'}
                        className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600"
                    >
                        <FaHome /> Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Errorpage;