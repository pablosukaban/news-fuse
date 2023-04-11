import React from 'react';

const Heading = ({ children }: { children: React.ReactNode }) => {
    return <h1 className='mb-4 text-2xl font-semibold'>{children}</h1>;
};

export default Heading;
