import useData from "../../Hooks/UseData";

const Instructors = () => {
  const [data] = useData();
  console.log(data);
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Meet Our Instructors</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Explore our talented team of instructors who are passionate about teaching and dedicated to helping you achieve your goals.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {data.map((instructorItem) => (
            <div key={instructorItem._id} className="bg-white rounded-lg shadow-xl">
              <figure>
                <img className="h-72 w-full object-cover object-center" src={instructorItem.instructor_image} alt="classes img" />
              </figure>
              <div className="p-6">
                <h2 className="text-lg font-bold mb-2">Name: {instructorItem.instructor_name}</h2>
                <p className="text-gray-600">Email: {instructorItem.instructor_email}</p>
                <div className="mt-4 flex justify-end">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">See Classes</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
