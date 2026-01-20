import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageModal({ isOpen, image, title, onClose, onPrev, onNext, hasNavigation = true, isDarkMode = false }) {
    if (!isOpen) return null;
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
        }
    }, []);
    return (
        <div
            onClick={onClose}
            className={`fixed inset-0 ${isDarkMode ? 'bg-black/60' : 'bg-black/40'} flex items-center justify-center z-[100] backdrop-blur-sm transition-all duration-300`}>
            {/* Modal Container */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl max-w-4xl w-full mx-4 my-4 max-h-screen flex flex-col overflow-hidden animate-fadeIn`}>
                {/* Header */}
                <div className={`flex items-center justify-between md:p-6 p-2 ${isDarkMode ? 'border-gray-700/50 bg-gradient-to-r from-gray-800 to-gray-800/80' : 'border-gray-100 bg-gradient-to-r from-white to-gray-50/50'} border-b`}>
                    <h2 className={`text-lg sm:text-xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} truncate`}>
                        {title}
                    </h2>
                    <button
                        onClick={onClose}
                        className={`ml-4 p-2 rounded-lg transition-all duration-200 ${isDarkMode ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'}`}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Image Container */}
                <div className={`flex-1 flex items-center justify-center overflow-auto p-4 md:p-8 ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50/50'}`}>
                    <img
                        src={image}
                        alt={title}
                        className="max-w-full max-h-[calc(100vh-250px)] object-contain rounded-lg shadow-sm"
                    />
                </div>

                {/* Navigation Buttons */}
                {hasNavigation && (
                    <div className={`flex items-center justify-between gap-4 p-3 md:p-6border-t ${isDarkMode ? 'border-gray-700/50 bg-gradient-to-r from-gray-800/80 to-gray-800' : 'border-gray-100 bg-gradient-to-r from-gray-50/50 to-white'}`}>
                        <button
                            onClick={onPrev}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${isDarkMode ? 'bg-gray-700/50 hover:bg-gray-600 text-gray-100 hover:shadow-lg' : 'bg-gray-100/70 hover:bg-gray-200 text-gray-700 hover:shadow-md'}`}
                        >
                            <ChevronLeft size={18} />
                            <span className="hidden sm:inline text-sm">Previous</span>
                        </button>
                        <button
                            onClick={onNext}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${isDarkMode ? 'bg-gray-700/50 hover:bg-gray-600 text-gray-100 hover:shadow-lg' : 'bg-gray-100/70 hover:bg-gray-200 text-gray-700 hover:shadow-md'}`}
                        >
                            <span className="hidden sm:inline text-sm">Next</span>
                            <ChevronRight size={18} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
