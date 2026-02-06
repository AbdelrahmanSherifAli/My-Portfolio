import React from 'react';

const MainContent = ({ children }) => {
    return (
        <div className="lg:pl-[400px] w-full min-h-screen pt-24 lg:pt-0">
            {children}
        </div>
    );
};

export default MainContent;
