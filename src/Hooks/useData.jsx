import { useQuery } from "@tanstack/react-query";


const useData = () => {

    const { data: data = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/data");
            return res.json()
        }
    })

    return [data, loading, refetch]

};

export default useData;