import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserCard from './UserCard';
import usersData from '../data/users.json';

function SearchResults() {
    const [results, setResults] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        if (query) {
            const filteredResults = usersData.filter(user =>
                `${user.firstName} ${user.lastName}`.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filteredResults);
        }
    }, [query]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {results.length > 0 ? (
                results.map((user, index) => <UserCard key={index} user={user} />)
            ) : (
                <div className="col-span-full text-center text-gray-500 text-lg">
                    No results found
                </div>
            )}
        </div>
    );
}

export default SearchResults;
