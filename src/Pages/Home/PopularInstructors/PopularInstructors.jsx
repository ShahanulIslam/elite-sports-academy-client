import React from 'react';
import InstructorCard from '../../Shared/InstructorCard/InstructorCard';
import useData from '../../../Hooks/UseData';

const PopularInstructors = () => {
    const [data] = useData();
    return (
        <div>
            <div className='text-center mt-12'>
                <h2 className="text-2xl font-bold mb-2">Featured Instructors</h2>
                <p className="text-gray-500 mb-4">Discover our exceptional instructors</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {data.map(instructor => (
                    <InstructorCard
                        key={instructor._id}
                        instructor={instructor}
                    />
                ))}
            </div>
        </div>

    );
};

export default PopularInstructors;