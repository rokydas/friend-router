import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const [user, setUser] = useState({});

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    } , [])

    // console.log(user)

    const { id } = useParams();
    return (
        <div>
            <h3>Friend {id} Details</h3>
            <h4>Name: {user.name}</h4>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default FriendDetails;