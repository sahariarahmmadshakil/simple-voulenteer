import { useEffect, useState } from 'react';

const useVolenter = () => {
    const [volenters, setVolenters] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setVolenters(data));
    }, []);
    return [volenters, setVolenters]


};

export default useVolenter;