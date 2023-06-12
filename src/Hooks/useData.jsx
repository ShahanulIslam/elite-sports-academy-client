import { useQuery } from "@tanstack/react-query";


const useData = () => {

    const {  data = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await fetch("https://elite-sports-academy-server-xi.vercel.app/data");
            return res.json()
        }
    })

    return [data, loading, refetch]

};

export default useData;