
import { Helmet } from "react-helmet";
import useData from "../../Hooks/UseData";
import ClassCard from "../Shared/ClassCard/ClassCard";

const AllClasses = () => {
    const [data] = useData();
    return (
        <div>
            <Helmet>
                <title>Elite Sports Academy | All Classes</title>
            </Helmet>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

                {
                    data.map(cls => <ClassCard
                        key={cls._id}
                        cls={cls}
                    ></ClassCard>)
                }
            </div>
        </div>

    );
};

export default AllClasses;
