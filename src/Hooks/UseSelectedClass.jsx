import useAxiosSecure from './useAxiosSecure';
import UseAuth from './UseAuth';
import { useQuery } from '@tanstack/react-query';

const UseSelectedClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const { user } = UseAuth();

    const { data: selectedClass = [], refetch } = useQuery({
        queryKey: ['selectedClass', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/selected-class?email=${user?.email}`)
            return res.data;
        }
    })
    return [selectedClass, refetch]
};

export default UseSelectedClass;

