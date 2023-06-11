import React from 'react';

const InstructorCard = ({instructor}) => {
    return (
        <div className="bg-white rounded-lg shadow-xl my-10">
            <figure>
                <img className="h-72 w-full object-cover object-center" src={instructor.instructor_image} alt="classes img" />
            </figure>
            <div className="p-6">
                <h2 className="text-lg font-bold mb-2">Name: {instructor.instructor_name}</h2>
                <p className="text-gray-600">Email: {instructor.instructor_email}</p>
                <div className="mt-4 flex justify-end">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">See Classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;