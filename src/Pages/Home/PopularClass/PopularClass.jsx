import React from 'react';
import useData from '../../../Hooks/UseData';
import ClassCard from '../../Shared/ClassCard/ClassCard';

const PopularClass = () => {
    const [data] = useData();

    return (
        <div>
            <div className='text-center my-4'>
                <h2 className="text-2xl font-bold mb-2">Popular Classes</h2>
                <p className="text-gray-500 mb-4">Check out our most popular classes</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {data.map(cls => (
                    <ClassCard
                        key={cls._id}
                        cls={cls}
                    />
                ))}
            </div>
        </div>

    );
};

export default PopularClass;