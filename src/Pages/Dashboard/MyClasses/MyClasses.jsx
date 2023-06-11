import { Helmet } from "react-helmet";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = UseAuth()

    axiosSecure(`/data?email=${user?.email}`)
        .then(data => {
            console.log(data.data);
        })


    return (
        <div>
            <Helmet>
                <title>Elite Sports  Academy | My Classes</title>
            </Helmet>
            <h2>i am form my classes</h2>
        </div>
    );
};

export default MyClasses;