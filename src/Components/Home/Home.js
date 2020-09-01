import React, { useState, useEffect } from 'react';
import User from '../User/User';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    } , [])

    return (
        <div>
            <h1>Number of user: {users.length}</h1>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Home;