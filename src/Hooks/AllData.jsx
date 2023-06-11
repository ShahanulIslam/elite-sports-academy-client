import { useQuery } from '@tanstack/react-query';

const AllData = () => {
    const { data: allData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['allData'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/alldata");
            return res.json()
        }
    })

    return [allData, loading, refetch]
};

export default AllData;