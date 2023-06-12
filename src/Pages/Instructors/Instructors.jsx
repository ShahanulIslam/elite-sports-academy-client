import { Helmet } from "react-helmet";
import useData from "../../Hooks/UseData";
import InstructorCard from "../Shared/InstructorCard/InstructorCard";

const Instructors = () => {
  const [data] = useData();
  console.log(data);
  return (
    <div className="py-12">
      <Helmet>
        <title>Elite Sports Academy | Instructors</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Meet Our Instructors</h1>
        <p className="text-lg font-semibold text-center mb-12">
          Explore our talented team of instructors who are passionate about teaching and dedicated to helping you achieve your goals.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {
            data.map(instructor => <InstructorCard
            key={instructor._id}
            instructor={instructor}
            ></InstructorCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Instructors;
