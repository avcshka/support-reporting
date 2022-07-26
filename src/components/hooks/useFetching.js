import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (id, dateStart, dateEnd) => {
        try {
            setIsLoading(true)
            await callback(id, dateStart, dateEnd)
            setError('');
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]
}