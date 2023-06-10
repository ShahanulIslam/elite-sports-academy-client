import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user} = UseAuth()

    axiosSecure(`/data?email=${user?.email}`)
    .then(data =>{
        console.log(data.data);
    })


    return (
        <div>
            <h2>i am form my classes</h2>
        </div>
    );
};

export default MyClasses;