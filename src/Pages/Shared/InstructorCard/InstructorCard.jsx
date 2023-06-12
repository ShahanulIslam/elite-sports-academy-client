
const InstructorCard = ({instructor}) => {
    return (
        <div className="rounded-lg bg-transparent shadow-xl my-10">
            <figure>
                <img className="h-72 w-full object-cover object-center" src={instructor.instructor_image} alt="classes img" />
            </figure>
            <div className="p-6">
                <h2 className="text-lg font-bold mb-2">Name: {instructor.instructor_name}</h2>
                <p className="font-semibold">Email: {instructor.instructor_email}</p>
                <div className="mt-4 flex justify-end">
                    <button className="px-4 py-2 bg-[#990001] text-white rounded-full hover:bg-blue-600 focus:outline-none">See Classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;